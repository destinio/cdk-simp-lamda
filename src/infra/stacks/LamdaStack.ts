import {Stack, StackProps} from 'aws-cdk-lib'
import { Code, Function as LamdaFunc, Runtime } from 'aws-cdk-lib/aws-lambda'
import {Construct} from 'constructs'
import path from 'path'

export class LamdaStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    new LamdaFunc(this, 'HelloLamda', {
      runtime: Runtime.NODEJS_18_X,
      handler: 'hello.main',
      code: Code.fromAsset(path.join(__dirname, '..', '..', 'funcs')),
    })
  }
}