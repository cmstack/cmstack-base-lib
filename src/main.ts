import {
  aws_ec2 as ec2,
  aws_ecs as ecs,
  aws_ecs_patterns as patterns,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';


export interface BaseProps {
  readonly vpc?: ec2.IVpc;
}

// create a Base construct
export class Base extends Construct {
  readonly vpc: ec2.IVpc;
  constructor(scope: Construct, id: string, props?: BaseProps) {
    super(scope, id);

    this.vpc = props?.vpc ?? new ec2.Vpc(this, 'Vpc', { natGateways: 1 });

    // create alb farget service
    new patterns.ApplicationLoadBalancedFargateService(this, 'Fargate', {
      vpc: this.vpc,
      cpu: 512,
      memoryLimitMiB: 1024,
      taskImageOptions: {
        image: ecs.ContainerImage.fromRegistry('amazon/amazon-ecs-sample'),
        containerPort: 80,
        enableLogging: true,
      },
    });
  }
}