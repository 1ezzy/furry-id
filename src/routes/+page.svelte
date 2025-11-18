<script lang="ts">
	import { Field, getSettings } from 'svelte-ux';
	import PageShell from '$lib/components/PageShell.svelte';

	const { currentTheme } = getSettings();

	const title = 'Furry License Generator';
</script>

<PageShell>
	<h1 class="flex text-6xl">
		{#each title.split('') as char}
			<span
				class="bg-linear-to-tr from-pink-400 to-blue-400 bg-clip-text px-px py-1 text-transparent"
				style="-webkit-text-stroke: 1px {$currentTheme.dark ? 'white' : 'black'};"
			>
				{char === ' ' ? '\u00A0' : char}
			</span>
		{/each}
	</h1>
	<div class="flex h-full w-full rounded-2xl border border-black">
		<div class="m-8 basis-3/5 self-center">
			<div class="bg-surface-100 aspect-214/135 rounded-2xl"></div>
		</div>
		<div class="flex-1 basis-2/5">
			<div class="m-8 grid grid-flow-col gap-4">
				<Field label="First Name" value="Sean" />
				<Field label="Last Name" value="Lynch" />
			</div>
		</div>
	</div>
</PageShell>
