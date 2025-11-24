<script>
	import PageShell from '$lib/components/PageShell.svelte';
	import { licenseStore } from '$lib/store/license-store.svelte';
	import { Button } from 'svelte-ux';
</script>

<PageShell>
	<h1
		class="from-primary to-secondary flex bg-linear-to-tr bg-clip-text py-1 text-center text-6xl text-transparent md:text-start"
	>
		Furry License Generator
	</h1>
	<div class="flex w-full flex-1 flex-col gap-8 overflow-hidden px-8 xl:gap-12 2xl:gap-20">
		<div class="flex aspect-856/540 h-fit max-h-[60vh] min-h-0 w-fit flex-1 self-center">
			{#if licenseStore.generatedLicenseImage.length > 0}
				<img
					src={licenseStore.generatedLicenseImage}
					alt="Generated Furry License"
					class="h-full w-auto object-contain"
				/>
			{/if}
		</div>
		<div class="flex w-full shrink-0 flex-col items-center gap-16 self-center 2xl:w-[50vw]">
			<Button size="lg" class="w-full" color="primary" variant="fill">Download</Button>
			<Button size="lg" class="w-full" color="primary" variant="fill">Share</Button>
		</div>
	</div>
</PageShell>
