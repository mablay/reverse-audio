export default class Recorder {
  static currentAudioPermission () {
    return navigator.permissions.query({name: 'microphone'})
    .then(res => res.state)
  }

  constructor () {
    this.buffer = null
    this.stream = null
    this.mediaRecorder = null
    this.context = new AudioContext()
  }
  
  // required to use other functions
  async init () {
    this.stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    this.mediaRecorder = new MediaRecorder(this.stream)
    const self = this
    this.mediaRecorder.ondataavailable = async (e) => {
      const blob = new Blob([e.data], { 'type' : 'audio/ogg; codecs=opus' })
      const arrBuf = await blob.arrayBuffer()
      const buffer = await this.context.decodeAudioData(arrBuf)
      for (let i=0; i<buffer.numberOfChannels; i++) {
        Array.prototype.reverse.call( buffer.getChannelData(i) )
      }
      this.buffer = buffer
      self.play()
    }
  }

  // start recording
  record () {
    this.mediaRecorder.start()
  }

  stop () {
    this.mediaRecorder.stop()
  }

  play () {
    const source = this.context.createBufferSource()
    source.buffer = this.buffer
    source.connect(this.context.destination)
    source.start(0)
  }

  destroy () {
    this.stream.getTracks().forEach(track => track.stop())
  }
}
