<script lang="ts">
	import { onMount } from 'svelte';
	import { resolve } from '$app/paths';
	import { goto } from '$app/navigation';
	import { Button } from 'svelte-ux';
	import { licenseStore } from '$lib/store/license-store.svelte';
	import PageShell from '$lib/components/PageShell.svelte';

	onMount(() => {
		if (!licenseStore.generatedLicenseImage) {
			goto(resolve('/'));
		}
	});

	const downloadImage = (): void => {
		if (!licenseStore.generatedLicenseImage) return;

		const link = document.createElement('a');
		link.href = licenseStore.generatedLicenseImage;
		link.download = 'furry-license.png';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};
</script>

<PageShell>
	<a href={resolve('/')}>
		<h1
			class="from-primary to-secondary flex bg-linear-to-tr bg-clip-text py-1 text-center text-6xl text-transparent md:text-start"
		>
			Furry License Generator
		</h1>
	</a>
	<div class="flex w-full flex-1 flex-col gap-12 overflow-hidden px-8 2xl:gap-20">
		<div class="flex aspect-856/540 h-fit max-h-[60vh] min-h-0 w-fit flex-1 self-center">
			{#if licenseStore.generatedLicenseImage.length > 0}
				<img
					src={licenseStore.generatedLicenseImage}
					alt="Generated Furry License"
					class="h-full w-auto object-contain"
				/>
			{/if}
		</div>
		<div class="flex w-full shrink-0 flex-col items-center gap-8 self-center 2xl:w-[50vw]">
			<Button size="lg" class="w-full" color="primary" variant="fill" onclick={downloadImage}>
				Download
			</Button>
			<Button size="lg" class="w-full" color="primary" variant="fill" disabled>
				Share (coming soon)
			</Button>
		</div>
	</div>
</PageShell>
