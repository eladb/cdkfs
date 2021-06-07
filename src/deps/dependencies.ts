import * as path from 'path';
import { PROJEN_DIR } from '../common';
import { Component } from '../component';
import { JsonFile } from '../json';
import { Project } from '../project';
import { Dependency, DependencyCoordinates, DependencyType, DepsManifest } from './model';

/**
 * The `Dependencies` component is responsible to track the list of dependencies
 * a project has, and then used by project types as the model for rendering
 * project-specific dependency manifests such as the dependencies section
 * `package.json` files.
 *
 * To add a dependency you can use a project-type specific API such as
 * `nodeProject.addDeps()` or use the generic API of `project.deps`:
 */
export class Dependencies extends Component {
  /**
   * The project-relative path of the deps manifest file.
   */
  public static readonly MANIFEST_FILE = path.posix.join(PROJEN_DIR, 'deps.json');

  /**
   * Returns the coordinates of a dependency spec.
   *
   * Given `foo@^3.4.0` returns `{ name: "foo", version: "^3.4.0" }`.
   * Given `bar@npm:@bar/legacy` returns `{ name: "bar", version: "npm:@bar/legacy" }`.
   */
  public static parseDependency(spec: string): DependencyCoordinates {
    const scope = spec.startsWith('@');
    if (scope) {
      spec = spec.substr(1);
    }

    const [module, ...version] = spec.split('@');
    const name = scope ? `@${module}` : module;
    if (version.length == 0) {
      return { name };
    } else {
      return { name, version: version?.join('@') };
    }
  }

  private readonly _deps = new Array<Dependency>();

  /**
   * Adds a dependencies component to the project.
   * @param project The parent project
   */
  constructor(project: Project) {
    super(project);

    // this is not really required at the moment, but actually quite useful as a
    // checked-in source of truth for dependencies and will potentially be
    // valuable in the future for CLI tools.
    new JsonFile(project, Dependencies.MANIFEST_FILE, {
      omitEmpty: true,
      obj: () => this.toJson(),
    });
  }

  /**
   * A copy of all dependencies recorded for this project.
   *
   * The list is sorted by type->name->version
   */
  public get all(): Dependency[] {
    return [...this._deps].sort(compareDeps).map(normalizeDep);
  }

  /**
   * Returns a dependency by name.
   *
   * Fails if there is no dependency defined by that name or if `type` is not
   * provided and there is more then one dependency type for this dependency.
   *
   * @param name The name of the dependency
   * @param type The dependency type. If this dependency is defined only for a
   * single type, this argument can be omitted.
   *
   * @returns a copy (cannot be modified)
   */
  public getDependency(name: string, type?: DependencyType): Dependency {
    const idx = this.tryGetDependencyIndex(name, type);
    if (idx === -1) {
      const msg = type
        ? `there is no ${type} dependency defined on "${name}"`
        : `there is no dependency defined on "${name}"`;

      throw new Error(msg);
    }

    return {
      ...normalizeDep(this._deps[idx]),
    };
  }

  /**
   * Adds a dependency to this project.
   * @param spec The dependency spec in the format `MODULE[@VERSION]` where
   * `MODULE` is the package-manager-specific module name and `VERSION` is an
   * optional semantic version requirement (e.g. `^3.4.0`).
   * @param type The type of the dependency.
   */
  public addDependency(spec: string, type: DependencyType, metadata: { [key: string]: any } = { }): Dependency {
    this.project.logger.debug(`${type}-dep ${spec}`);

    const dep: Dependency = {
      ...Dependencies.parseDependency(spec),
      type,
      metadata,
    };

    const existingDepIndex = this.tryGetDependencyIndex(dep.name, type);

    if (existingDepIndex !== -1) {
      const existingDep = this._deps[existingDepIndex];
      if (dep.version === existingDep.version || existingDep.version === undefined) {
        this.project.logger.debug(`updating existing ${dep.type}-dep ${dep.name} with more specific version/metadata`);
        this._deps[existingDepIndex] = dep;
      } else {
        throw new Error(`"${dep.name}" is already specified with different version: ${existingDep.version}`);
      }
    } else {
      this._deps.push(dep);
    }

    return dep;
  }

  /**
   * Removes a dependency.
   * @param name The name of the module to remove (without the version)
   * @param type The dependency type. This is only required if there the
   * dependency is defined for multiple types.
   */
  public removeDependency(name: string, type?: DependencyType) {
    const removeIndex = this.tryGetDependencyIndex(name, type);
    if (removeIndex === -1) {
      return;
    }

    this._deps.splice(removeIndex, 1);
  }

  private tryGetDependencyIndex(name: string, type?: DependencyType): number {
    const deps = this._deps.filter(d => d.name === name);
    if (deps.length === 0) {
      return -1; // not found
    }

    if (!type) {
      if (deps.length > 1) {
        throw new Error(`"${name}" is defined for multiple dependency types: ${deps.map(d => d.type).join(',')}. Please specify dependency type`);
      }

      type = deps[0].type;
    }

    return this._deps.findIndex(dep => dep.name === name && dep.type === type);
  }

  private toJson(): DepsManifest | undefined {
    if (this._deps.length === 0) { return undefined; }
    return {
      dependencies: this._deps.sort(compareDeps).map(normalizeDep),
    };
  }
}

function normalizeDep(d: Dependency) {
  const obj: any = { };
  for (const [k, v] of Object.entries(d)) {
    if (v == undefined) {continue;}
    if (typeof(v) === 'object' && Object.keys(v).length === 0) {continue;}
    if (Array.isArray(v) && v.length === 0) {continue;}
    obj[k] = v;
  }

  return obj;
}

function compareDeps(d1: Dependency, d2: Dependency) {
  return specOf(d1).localeCompare(specOf(d2));

  function specOf(dep: Dependency) {
    let spec = dep.type + ':' + dep.name;
    if (dep.version) {
      spec += '@' + dep.version;
    }
    return spec;
  }
}

