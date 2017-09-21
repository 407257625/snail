import utils from './utils'

/**
 * 下载状态
 *
 * @export
 * @class TorrentState
 */
export default class TorrentState {
  constructor (torrent) {
    this.status = 'downloading'
    this.infoHash = torrent.infoHash
    this.magnetURI = torrent.magnetURI
    this.torrentName = ''
    this.progress = torrent.progress
    this.downloaded = torrent.downloaded
    this.path = torrent.path
    this.files = torrent.files.map(file => {
      return {
        name: file.name,
        path: file.path,
        length: file.length,
        downloaded: file.downloaded,
        progress: file.progress
      }
    })
    this.displayName = this.files.length > 0 ? this.files[0].path.split(require('path').sep)[0] : undefined
    this.totalLength = utils.calculateTotalLength(torrent.files)
  }
}
