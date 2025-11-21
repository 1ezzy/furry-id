<script lang="ts">
	import { onMount } from 'svelte';
	import { Button, getSettings, settings, ThemeInit, ThemeSwitch } from 'svelte-ux';
	import favicon from '$lib/assets/favicon.svg';

	import 'flag-icons/css/flag-icons.min.css';
	import './app.css';

	let { children } = $props();

	settings({
		themes: {
			light: ['light'],
			dark: ['dark']
		}
	});

	const { currentTheme } = getSettings();
	onMount(() => {
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		currentTheme.setTheme(prefersDark ? 'dark' : 'light');
	});
</script>

<ThemeInit />

<svelte:head>
	<title>Furry License Generator</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<header class="bg-surface-300 flex h-16 items-center justify-end gap-4 px-8">
	<div class="pr-3">
		<ThemeSwitch theme={$currentTheme} />
	</div>
	<div class="h-1/2 w-px bg-black dark:bg-white"></div>
	<Button
		size="lg"
		icon={'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>'}
	></Button>
</header>
<main class="bg-surface-300 flex h-full min-h-screen flex-col p-0 md:min-h-[calc(100vh-4rem)]">
	{@render children()}
</main>
