import App from './App.svelte';

window.oncontextmenu = e => e.preventDefault()

const app = new App({
	target: document.body,
	props: {}
})

export default app;