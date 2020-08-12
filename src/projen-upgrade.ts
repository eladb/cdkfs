import { NodeProject } from './node-project';
import { GithubWorkflow } from './github-workflow';

export interface ProjenUpgradeOptions {
  /**
   * The secret name which contains a GitHub Access Token with `repo` and
   * `workflow` permissions. This token is used to submit the upgrade pull
   * request, which will likely include workflow updates.
   *
   * @default - auto-upgrade is disabled
   */
  readonly autoUpgradeSecret?: string;
}

/**
 * Checks for new versions of projen and creates a PR with an upgrade change.
 */
export class ProjenUpgrade {
  constructor(project: NodeProject, options: ProjenUpgradeOptions = { }) {
    const script = 'projen:upgrade';

    project.addScript(script,
      'chmod +w package.json',
      'yarn upgrade -L projen',
      'chmod -w package.json',
      'yarn projen');

    if (options.autoUpgradeSecret) {
      const workflow = new GithubWorkflow(project, 'ProjenUpgrade');

      workflow.on({
        schedule: [ { cron: '0 6 * * *' } ], // 6am every day
        workflow_dispatch: {},               // allow manual triggering
      });

      workflow.addJobs({
        upgrade: {
          'runs-on': 'ubuntu-latest',
          'steps': [
            ...project.workflowBootstrapSteps,

            // upgrade
            { run: `yarn ${script}` },

            // submit a PR
            {
              name: 'Create Pull Request',
              uses: 'peter-evans/create-pull-request@v3',
              with: {
                'token': '${{ secrets.' + options.autoUpgradeSecret + ' }}',
                'commit-message': 'chore: upgrade projen',
                'branch': 'auto/projen-upgrade',
                'title': 'chore: upgrade projen',
                'body': 'This PR upgrades projen to the latest version',
              },
            },
          ],
        },
      });
    }
  }
}