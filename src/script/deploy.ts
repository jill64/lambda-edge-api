import { run } from '../utils/run.js'

export const deploy = async () => {
  await run('npx cdk deploy --require-approval never --all')
}
