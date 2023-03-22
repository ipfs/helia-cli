import type { Helia } from '@helia/interface'
import type { Libp2p } from '@libp2p/interface-libp2p'
import type { Multiaddr } from '@multiformats/multiaddr'
import { createAuthorizationGet } from './commands/authorization/get.js'
import { createBlockstoreDelete } from './commands/blockstore/delete.js'
import { createBlockstoreGet } from './commands/blockstore/get.js'
import { createBlockstoreHas } from './commands/blockstore/has.js'
import { createBlockstorePut } from './commands/blockstore/put.js'
import { createBlockstoreDeleteMany } from './commands/blockstore/delete-many.js'
import { createBlockstoreGetAll } from './commands/blockstore/get-all.js'
import { createBlockstoreGetMany } from './commands/blockstore/get-many.js'
import { createBlockstorePutMany } from './commands/blockstore/put-many.js'
import { createDatastoreDelete } from './commands/datastore/delete.js'
import { createDatastoreGet } from './commands/datastore/get.js'
import { createDatastoreHas } from './commands/datastore/has.js'
import { createDatastorePut } from './commands/datastore/put.js'
import { createDatastoreDeleteMany } from './commands/datastore/delete-many.js'
import { createDatastoreGetMany } from './commands/datastore/get-many.js'
import { createDatastorePutMany } from './commands/datastore/put-many.js'
import { createDatastoreBatch } from './commands/datastore/batch.js'
import { createDatastoreQueryKeys } from './commands/datastore/query-keys.js'
import { createDatastoreQuery } from './commands/datastore/query.js'

export interface HeliaRpcClientConfig {
  multiaddr: Multiaddr
  libp2p: Libp2p
  user: string
}

export interface HeliaRpcMethodConfig {
  multiaddr: Multiaddr
  libp2p: Libp2p
  authorization?: string
}

export async function createHeliaRpcClient (config: HeliaRpcClientConfig): Promise<Helia> {
  await config.libp2p.dial(config.multiaddr)

  const getAuthorization = createAuthorizationGet(config)
  const authorization = await getAuthorization(config.user)
  const methodConfig = {
    ...config,
    authorization
  }

  return {
    blockstore: {
      deleteMany: createBlockstoreDeleteMany(methodConfig),
      delete: createBlockstoreDelete(methodConfig),
      getAll: createBlockstoreGetAll(methodConfig),
      getMany: createBlockstoreGetMany(methodConfig),
      get: createBlockstoreGet(methodConfig),
      has: createBlockstoreHas(methodConfig),
      putMany: createBlockstorePutMany(methodConfig),
      put: createBlockstorePut(methodConfig)
    },
    datastore: {
      batch: createDatastoreBatch(methodConfig),
      deleteMany: createDatastoreDeleteMany(methodConfig),
      delete: createDatastoreDelete(methodConfig),
      getMany: createDatastoreGetMany(methodConfig),
      get: createDatastoreGet(methodConfig),
      has: createDatastoreHas(methodConfig),
      putMany: createDatastorePutMany(methodConfig),
      put: createDatastorePut(methodConfig),
      queryKeys: createDatastoreQueryKeys(methodConfig),
      query: createDatastoreQuery(methodConfig)
    },
    // @ts-expect-error incomplete implementation
    libp2p: {

    },
    async stop () {
      throw new Error('Not implemented')
    }
  }
}
