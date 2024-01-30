import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'cmstack',
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

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();