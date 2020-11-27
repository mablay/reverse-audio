<script>
  export let permission
  function init () {
    console.log('init')
    recorder.init().catch(err => { error = err })
  }
</script>

{#if permission === 'prompt'}
<p>The recoreded audio data will be processed locally and not leave your browser.</p>
<p>Access to your microphone is required.</p>
<p>
  <button on:click="{init}">
    Ok, ask me for microphone usage permission!
  </button>
</p>
{:else if permission === 'denied'}
<div class="warning">
  You have denied this page access to the microphone.<br>
  Depending on your browser, You can change that configuration in page settings or the URL bar.<br>
  Reload the page afterwards for the changes to take effect.
</div>  
{/if}

<style>
.warning {
  color: orange;
}
</style>