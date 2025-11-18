<script lang="ts">
	import { getSettings, settings, ThemeInit, ThemeSwitch } from 'svelte-ux';
	import favicon from '$lib/assets/favicon.svg';

	import './app.css';

	let { children } = $props();

	settings({
		themes: {
			light: ['light'],
			dark: ['dark']
		}
	});

	const { currentTheme } = getSettings();
</script>

<ThemeInit />

<svelte:head>
	<title>Furry License Generator</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<header class="flex h-16 items-center justify-end">
	<ThemeSwitch theme={$currentTheme} />
</header>
<main
	class="bg-surface-300 flex h-full min-h-screen flex-col p-4 md:min-h-[calc(100vh-4rem)] md:p-0"
>
	{@render children()}
</main>
