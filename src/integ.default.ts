import {
  App,
  Stack,
  aws_ec2 as ec2,
} from 'aws-cdk-lib';

import { Base } from './main';

const env = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new App();

const stack = new Stack(app, 'BaseStack', { env });


const vpc = ec2.Vpc.fromLookup(stack, 'Vpc', { isDefault: true });

new Base(stack, 'Base', {
  vpc,
});