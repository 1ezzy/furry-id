<script lang="ts">
	import { licenseStore } from '$lib/store/license-store.svelte';
	import { signature } from 'svelte-signature-pad';
	import { Button } from 'svelte-ux';

	let width = $state<number>(0);
	let height = $state<number>(0);
	let preview = $state<string>();

	const ondraw = (path: string) => (preview = path);
	const oncomplete = (path: string) => {
		preview = '';
		licenseStore.signature = [...licenseStore.signature, { width, height, path }];
	};

	const clear = () => {
		licenseStore.signature = [];
	};
</script>

<div class="light:border-black relative aspect-4/1 w-full rounded-sm border bg-white">
	<div
		class="h-full w-full"
		use:signature={{ ondraw, oncomplete }}
		bind:clientWidth={width}
		bind:clientHeight={height}
		ontouchmove={(e) => e.preventDefault()}
	>
		{#each licenseStore.signature as layer}
			<svg
				class="pointer-events-none absolute h-full w-full fill-black"
				viewBox="0 0 {layer.width} {layer.height}"
			>
				<path d={layer.path} />
			</svg>
		{/each}

		{#if preview}
			<svg
				class="pointer-events-none absolute h-full w-full fill-gray-900"
				viewBox="0 0 {width} {height}"
			>
				<path d={preview} />
			</svg>
		{/if}
	</div>
	<Button color="danger" variant="fill-outline" class="absolute top-2 right-2 " onclick={clear}>
		Clear
	</Button>
</div>
