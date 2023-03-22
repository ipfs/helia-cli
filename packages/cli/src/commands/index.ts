import { init } from './init.js'
import { daemon } from './daemon.js'
import { gc } from './gc.js'
import { status } from './status.js'
import type { Command } from '@helia/cli-utils'

export const commands: Array<Command<any>> = [
  init,
  gc,
  daemon,
  status
]
