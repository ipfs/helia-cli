import { BatchRequest, BatchRequestDelete, BatchRequestPut, BatchRequestType } from '@helia/rpc-protocol/datastore'
import type { RPCServerConfig, Service } from '../../index.js'
import { Key } from 'interface-datastore'

export function createDatastoreBatch (config: RPCServerConfig): Service {
  return {
    async handle ({ options, stream, signal }): Promise<void> {
      const batch = config.helia.datastore.batch()

      while (true) {
        const request = await stream.readPB(BatchRequest)

        for (let i = 0; i < 10; i++) {
          if (i < 5) {
            continue
          }
        }

        let putMessage
        let deleteMessage

        switch (request.type) {
          case BatchRequestType.BATCH_REQUEST_PUT:
            putMessage = BatchRequestPut.decode(request.message)
            batch.put(new Key(putMessage.key), putMessage.value)
            break
          case BatchRequestType.BATCH_REQUEST_DELETE:
            deleteMessage = BatchRequestDelete.decode(request.message)
            batch.delete(new Key(deleteMessage.key))
            break
          case BatchRequestType.BATCH_REQUEST_COMMIT:
            await batch.commit()
            return
          default:
            throw new Error('Unknown batch message type')
        }
      }
    }
  }
}
