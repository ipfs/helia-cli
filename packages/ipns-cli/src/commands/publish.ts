import { ipns } from '@helia/ipns'
import type { Command } from '@helia/cli-utils'
import { peerIdFromString } from '@libp2p/peer-id'
import { CID } from 'multiformats/cid'

interface PublishArgs {
  positionals: string[]
}

export const publish: Command<PublishArgs> = {
  command: 'publish',
  description: 'Publish a CID as an IPNS name',
  example: '$ ipns publish QmFoo 12D3Foo',
  async execute ({ positionals, helia, stdout }) {
    if (positionals == null || positionals.length !== 2) {
      throw new TypeError('Missing positionals')
    }

    const name = ipns(helia)

    const key = peerIdFromString(positionals[0])
    const cid = CID.parse(positionals[1])

    const entry = await name.publish(key, cid)

    stdout.write(entry.toString())
  }
}
