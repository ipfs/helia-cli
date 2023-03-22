import type { Multiaddr } from '@multiformats/multiaddr'

export function multiaddrToUrl (addr: Multiaddr): URL {
  const protoNames = addr.protoNames()

  if (protoNames.length !== 3) {
    throw new Error('Helia RPC address format incorrect')
  }

  if (protoNames[0] !== 'ip4' && protoNames[0] !== 'ip6') {
    throw new Error('Helia RPC address format incorrect')
  }

  if (protoNames[1] !== 'tcp' && protoNames[2] !== 'ws') {
    throw new Error('Helia RPC address format incorrect')
  }

  const { host, port } = addr.toOptions()

  return new URL(`ws://${host}:${port}`)
}
