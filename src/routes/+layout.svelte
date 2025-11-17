<script lang="ts">
	import { settings, ThemeInit } from 'svelte-ux';
	import favicon from '$lib/assets/favicon.svg';

	import './app.css';

	let { children } = $props();

	settings({
		themes: {
			light: ['light'],
			dark: ['dark']
		}
	});
</script>

<ThemeInit />

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
