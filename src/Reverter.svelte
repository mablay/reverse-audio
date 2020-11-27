<script>
import Recorder from "./recorder";
export let recorder
const recordText = 'Press & hold to record'
const stopText = 'Release to play back'
let text = recordText
let hasRecording = false

async function record () {
  if (!recorder) {
    // console.log('init audio context')
    recorder = new Recorder()
    await recorder.init()
  }
  recorder.record()
  text = stopText
}
function stop () {
  text = recordText
  recorder.stop()
  hasRecording = true
}
function play () {
  recorder.play()
}
</script>

<button
  class="no-select"
  on:mousedown="{record}"
  on:touchstart="{record}"
  on:mouseup="{stop}"
  on:touchend="{stop}">
  {text}
</button>
{#if hasRecording}
  <button on:click="{play}">▶️</button>
{/if}


<style>
  .no-select {
    user-select: none;
  }
</style>