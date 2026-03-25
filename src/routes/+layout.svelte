<script lang="ts">
	import { onMount } from 'svelte';
	import { Button, getSettings, settings, ThemeInit, ThemeSwitch } from 'svelte-ux';

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
</svelte:head>

<header class="bg-surface-300 flex h-16 items-center justify-end gap-4 px-8">
	<div class="pr-3">
		<ThemeSwitch theme={$currentTheme} />
	</div>
	<div class="h-1/2 w-0.5 bg-black dark:bg-white"></div>
	<Button
		class="aspect-square"
		href="https://bsky.app/profile/ezzy.dog"
		rel="noopener noreferrer"
		target="_blank"
		icon="<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 16 16&quot; fill=&quot;currentColor&quot; width=&quot;100%&quot; height=&quot;100%&quot;><path d=&quot;M3.468 1.948C5.303 3.325 7.276 6.118 8 7.616c.725-1.498 2.698-4.29 4.532-5.668C13.855.955 16 .186 16 2.632c0 .489-.28 4.105-.444 4.692-.572 2.04-2.653 2.561-4.504 2.246 3.236.551 4.06 2.375 2.281 4.2-3.376 3.464-4.852-.87-5.23-1.98-.07-.204-.103-.3-.103-.218 0-.081-.033.014-.102.218-.379 1.11-1.855 5.444-5.231 1.98-1.778-1.825-.955-3.65 2.28-4.2-1.85.315-3.932-.205-4.503-2.246C.28 6.737 0 3.12 0 2.632 0 .186 2.145.955 3.468 1.948&quot;/></svg>"
	></Button>
	<Button
		class="aspect-square"
		href="https://www.github.com/1ezzy"
		rel="noopener noreferrer"
		target="_blank"
		icon="<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; width=&quot;100%&quot; height=&quot;100%&quot;><path d=&quot;M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4&quot;/><path d=&quot;M9 18c-4.51 2-5-2-7-2&quot;/></svg>"
	></Button>
</header>
<main class="bg-surface-300 flex h-full min-h-screen flex-col p-0 md:min-h-[calc(100vh-4rem)]">
	{@render children()}
</main>
