import type { Mtime } from 'ipfs-unixfs'

export function dateToMtime (date: Date): Mtime {
  const ms = date.getTime()
  const secs = BigInt(Math.floor(ms / 1000))

  return {
    secs,
    nsecs: Number((BigInt(ms) - (secs * 1000n)) * 1000n)
  }
}
