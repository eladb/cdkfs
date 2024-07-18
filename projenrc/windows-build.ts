import { IConstruct } from "constructs";
import { Component, JsonPatch } from "../src";
import { GitHub } from "../src/github";

/**
 * Setup the github workflow for windows
 *
 * @param project The project to add the configuration to
 */
export class WindowsBuild extends Component {
  public constructor(scope: IConstruct) {
    super(scope, "WindowsBuild");

    const github = GitHub.of(this.project)!;
    const buildWorkflowFile = github.tryFindWorkflow("build")?.file;

    const JOB_BUILD = "build";
    const JOB_BUILD_MATRIX = "build_matrix";
    const buildJobPath = (path?: string) => {
      return `/jobs/${JOB_BUILD}${path ?? ""}`;
    };

    const skippedStepIndexes = [
      // Upload coverage to Codecov
      5,

      // Backup artifact permissions
      9,

      // Upload artifact
      10,
    ];

    const skippedStepPatches = skippedStepIndexes.map((stepIndex) =>
      JsonPatch.add(
        buildJobPath(`/steps/${stepIndex}/if`),
        "${{ matrix.runner.primary_build }}"
      )
    );

    // Setup runner matrix
    buildWorkflowFile?.patch(
      JsonPatch.add(buildJobPath("/strategy"), {
        matrix: {
          runner: [
            {
              os: "ubuntu-latest",
              primary_build: true,
              shell: "bash",
              allow_failure: false,
            },
            {
              os: "windows-latest",
              primary_build: false,
              shell: "cmd",
              allow_failure: false,
            },
          ],
        },
      }),

      // Run job on OS from matrix
      JsonPatch.add(buildJobPath("/runs-on"), "${{ matrix.runner.os }}"),

      // Allow builds to fail based on matrix
      JsonPatch.add(
        buildJobPath("/continue-on-error"),
        "${{ matrix.runner.allow_failure }}"
      ),

      // Add conditions to steps that should only run on the primary build
      JsonPatch.add(
        buildJobPath("/steps/6/if"),
        "${{ steps.self_mutation.outputs.self_mutation_happened && matrix.runner.primary_build }}"
      ),

      JsonPatch.add(buildJobPath("/steps/4"), {
        name: "build on windows",
        run: `${this.project.projenCommand} build`,
        shell: "cmd",
        if: "${{ !matrix.runner.primary_build }}",
      }),

      // Skip steps that shouldn't run on Windows
      ...skippedStepPatches
    );

    // Add the join target job for branch protection
    buildWorkflowFile?.patch(
      // Rename old workflow
      JsonPatch.move(buildJobPath(), `/jobs/${JOB_BUILD_MATRIX}`),

      // Insert new meta job
      JsonPatch.add(buildJobPath(), {
        "runs-on": "ubuntu-latest",
        needs: [JOB_BUILD_MATRIX],
        if: "always()",
        outputs: {
          self_mutation_happened: `\${{ needs.${JOB_BUILD_MATRIX}.outputs.self_mutation_happened }}`,
        },
        steps: [
          {
            name: "Build result",
            run: `echo \${{needs.${JOB_BUILD_MATRIX}.result}}`,
          },
          {
            if: `\${{ needs.${JOB_BUILD_MATRIX}.result != 'success' }}`,
            name: "Set status based on matrix build",
            run: "exit 1",
          },
        ],
      })
    );
  }
}
