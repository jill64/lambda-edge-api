import { run } from '../utils/run.js'

export const destroy = async () => {
  await run('npx cdk destroy --require-approval never --all')
}
