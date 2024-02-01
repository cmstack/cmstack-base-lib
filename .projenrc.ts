import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Charles Meruwoma',
  authorAddress: 'charles@cmstack.xyz',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: 'cmstack-base-lib',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/cmstack/cmstack-base-lib.git',
  githubOptions: {
    mergify: false,
  },
  devDeps: [
    'aws-cdk',
    'ts-node',
  ],
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

// exclude cdk.out
const common_exclude = ['cdk.out', '.idea', '.vscode', 'cdk.context.json'];

project.gitignore.exclude(...common_exclude);
project.npmignore!.exclude(...common_exclude);

project.synth();