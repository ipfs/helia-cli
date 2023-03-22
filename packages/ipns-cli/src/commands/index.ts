import type { Command } from '@helia/cli-utils'
import { publish } from './publish.js'
import { resolve } from './resolve.js'

export const commands: Array<Command<any>> = [
  publish,
  resolve
]
