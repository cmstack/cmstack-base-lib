import {
  assertions,
  App,
  Stack,
} from 'aws-cdk-lib';
import { Base } from '../src';


test('match snapshot', () => {
  const app = new App();
  const stack = new Stack(app, 'BaseStack');
  new Base(stack, 'Base');
  const templace = assertions.Template.fromStack(stack);
  expect(templace).toMatchSnapshot();
});


// make sure the stack has 1 alb
test('alb', () => {
  const app = new App();
  const stack = new Stack(app, 'BaseStack');
  new Base(stack, 'Base');
  const templace = assertions.Template.fromStack(stack);
  templace.resourceCountIs('AWS::ElasticLoadBalancingV2::LoadBalancer', 1);
});