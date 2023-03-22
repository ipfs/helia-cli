import { DeleteManyOptions, DeleteManyRequest, DeleteManyResponse } from '@helia/rpc-protocol/datastore'
import { RPCCallMessage, RPCCallMessageType } from '@helia/rpc-protocol/rpc'
import type { RPCServerConfig, Service } from '../../index.js'
import { Key } from 'interface-datastore'

export function createDatastoreGetMany (config: RPCServerConfig): Service {
  return {
    async handle ({ options, stream, signal }): Promise<void> {
      const opts = DeleteManyOptions.decode(options)

      for await (const key of config.helia.datastore.deleteMany(
        (async function * () {
          while (true) {
            const request = await stream.readPB(DeleteManyRequest)

            yield new Key(request.key)
          }
        })(), {
          signal,
          ...opts
        })) {
        stream.writePB({
          type: RPCCallMessageType.RPC_CALL_MESSAGE,
          message: DeleteManyResponse.encode({
            key: key.toString()
          })
        },
        RPCCallMessage)
      }
    }
  }
}
