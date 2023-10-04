import { build as esbuild } from 'esbuild'
import { copyFile, mkdir, rm, writeFile } from 'fs/promises'
import path from 'path'
import { BuildOptions } from '../types/BuildOptions.js'
import { copy } from '../utils/copy.js'
import { root } from '../utils/root.js'
import { run } from '../utils/run.js'
import { deploy } from './deploy.js'

export const build = async (options: BuildOptions) => {
  const buildDir = path.join(root, 'build')

  await rm(buildDir, { recursive: true, force: true })
  await mkdir(buildDir, { recursive: true })

  const binDir = path.join(root, 'bin')
  const edgeDir = path.join(buildDir, 'edge')

  await Promise.all([
    copyFile(path.join(binDir, 'synth.ts'), path.join(buildDir, 'synth.ts')),
    copyFile(
      path.join(binDir, 'cdk-stack.ts'),
      path.join(buildDir, 'cdk-stack.ts')
    ),
    copy(path.join(binDir, 'params.ts'), path.join(buildDir, 'params.ts'), {
      '128 /* $$__MEMORY_SIZE__$$ */': options.memory?.toString() ?? '128',
      __DOMAIN_NAME__: options.domain?.fqdn ?? '',
      __CERTIFICATE_ARN__: options.domain?.certificateArn ?? '',
      __STACK_NAME__: options.name
    }),
    esbuild({
      format: 'cjs',
      bundle: true,
      minify: true,
      external: ['node:*', '@aws-sdk/*'],
      ...options?.esbuild,
      entryPoints: [options.entryPoint],
      outfile: path.join(edgeDir, 'index.js'),
      platform: 'node'
    })
  ])

  // Make .env file
  if (options.env) {
    await writeFile(
      path.join(edgeDir, '.env'),
      Object.entries(options.env).reduce(
        (acc, [key, value]) => `${acc}${key}="${value}"\n`,
        ''
      )
    )
  }

  await run('npx cdk bootstrap')

  if (options.deploy) {
    await deploy()
    return
  }

  await run('npx cdk synth')
}
