import { ipns } from '@helia/ipns'
import type { Command } from '@helia/cli-utils'
import { peerIdFromString } from '@libp2p/peer-id'

interface ResolveArgs {
  positionals?: string[]
  offset?: string
  length?: string
}

export const resolve: Command<ResolveArgs> = {
  command: 'resolve',
  description: 'Resolve an IPNS name',
  example: '$ ipns resolve <PeerId>',
  async execute ({ positionals, offset, length, helia, stdout }) {
    if (positionals == null || positionals.length === 0) {
      throw new TypeError('Missing positionals')
    }

    const name = ipns(helia)

    const cid = await name.resolve(peerIdFromString(positionals[0]))

    stdout.write(cid.toString())
  }
}
