import type { RPCServerConfig, Service } from '../index.js'
import { createAuthorizationGet } from './authorization/get.js'
import { createBlockstoreDelete } from './blockstore/delete.js'
import { createBlockstoreGet } from './blockstore/get.js'
import { createBlockstoreHas } from './blockstore/has.js'
import { createBlockstorePut } from './blockstore/put.js'
import { createBlockstoreDeleteMany } from './blockstore/delete-many.js'
import { createBlockstoreGetAll } from './blockstore/get-all.js'
import { createBlockstoreGetMany } from './blockstore/get-many.js'
import { createBlockstorePutMany } from './blockstore/put-many.js'
import { createDatastoreBatch } from './datastore/batch.js'
import { createDatastoreDelete } from './datastore/delete.js'
import { createDatastoreGet } from './datastore/get.js'
import { createDatastoreHas } from './datastore/has.js'
import { createDatastorePut } from './datastore/put.js'
import { createDatastoreDeleteMany } from './datastore/delete-many.js'
import { createDatastoreGetMany } from './datastore/get-many.js'
import { createDatastorePutMany } from './datastore/put-many.js'
import { createDatastoreQueryKeys } from './datastore/query-keys.js'
import { createDatastoreQuery } from './datastore/query.js'

export function createServices (config: RPCServerConfig): Record<string, Service> {
  const services: Record<string, Service> = {
    '/authorization/get': createAuthorizationGet(config),
    '/blockstore/delete-many': createBlockstoreDeleteMany(config),
    '/blockstore/delete': createBlockstoreDelete(config),
    '/blockstore/get-all': createBlockstoreGetAll(config),
    '/blockstore/get-many': createBlockstoreGetMany(config),
    '/blockstore/get': createBlockstoreGet(config),
    '/blockstore/has': createBlockstoreHas(config),
    '/blockstore/put-many': createBlockstorePutMany(config),
    '/blockstore/put': createBlockstorePut(config),
    '/datastore/batch': createDatastoreBatch(config),
    '/datastore/delete-many': createDatastoreDeleteMany(config),
    '/datastore/delete': createDatastoreDelete(config),
    '/datastore/get-many': createDatastoreGetMany(config),
    '/datastore/get': createDatastoreGet(config),
    '/datastore/has': createDatastoreHas(config),
    '/datastore/put-many': createDatastorePutMany(config),
    '/datastore/put': createDatastorePut(config),
    '/datastore/query-keys': createDatastoreQueryKeys(config),
    '/datastore/query': createDatastoreQuery(config)
  }

  return services
}
