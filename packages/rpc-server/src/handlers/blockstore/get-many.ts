import { GetManyOptions, GetManyRequest, GetManyResponse } from '@helia/rpc-protocol/blockstore'
import { RPCCallMessage, RPCCallMessageType } from '@helia/rpc-protocol/rpc'
import type { RPCServerConfig, Service } from '../../index.js'
import { CID } from 'multiformats/cid'

export function createBlockstoreGetMany (config: RPCServerConfig): Service {
  return {
    async handle ({ options, stream, signal }): Promise<void> {
      const opts = GetManyOptions.decode(options)

      for await (const block of config.helia.blockstore.getMany(
        (async function * () {
          while (true) {
            const request = await stream.readPB(GetManyRequest)

            yield CID.decode(request.cid)
          }
        })(), {
          signal,
          ...opts
        })) {
        stream.writePB({
          type: RPCCallMessageType.RPC_CALL_MESSAGE,
          message: GetManyResponse.encode({
            block
          })
        },
        RPCCallMessage)
      }
    }
  }
}
