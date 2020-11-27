<script>
  import Recorder from './recorder'
  import Reverter from './Reverter.svelte'
  let error
  let permission
  let recorder
  Recorder.currentAudioPermission()
    .then(state => {
      permission = state
    })

  function init () {
    recorder = new Recorder()
    recorder.init()
      .then(() => permission = 'granted')
      .catch(err => { error = err })
  }
</script>

<main>
  <div id="info">
    <h1>Reverse Audio</h1>
    {#if error}
    <div class="error">{error}</div>
    {:else}
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
    {:else if permission === 'granted'}
    <Reverter recorder="{recorder}"/>
    {/if}
    {/if}
  </div>
  <div>
  </div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
  }
  
  .warning {
    color: orange;
  }
  .error {
    color: red;
  }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>