import type { Command, RootArgs } from '@helia/cli-utils'
import { findHelia } from '@helia/cli-utils/find-helia'

export const gc: Command<RootArgs> = {
  command: 'gc',
  description: 'Run garbage collection on the Helia node',
  example: '$ helia gc',
  async execute ({ directory, rpcAddress, stdout, user }) {
    const {
      helia
    } = await findHelia(directory, rpcAddress, user)

    await helia.gc()
  }
}
