<script lang="ts">
	import AllFormSections from '$lib/components/AllFormSections.svelte';
	import LicenseOverlay from '$lib/components/overlay/LicenseOverlay.svelte';
	import PageShell from '$lib/components/PageShell.svelte';

	const title = 'Furry License Generator';
</script>

<PageShell>
	<h1
		class="from-primary to-secondary flex bg-linear-to-tr bg-clip-text py-1 text-6xl text-transparent"
	>
		{title}
	</h1>
	<div class="flex h-fit w-full items-center">
		<div class="flex h-full w-full items-start gap-24">
			<div class="basis-3/5">
				<div class="bg-surface-100 relative aspect-214/135 rounded-2xl">
					<div
						class="h-full rounded-2xl bg-[url('/license.jpeg')] bg-cover bg-center opacity-30"
					></div>
					<LicenseOverlay></LicenseOverlay>
				</div>
			</div>
			<div class="flex flex-1 basis-2/5 flex-col gap-8">
				<AllFormSections></AllFormSections>
			</div>
		</div>
	</div>
</PageShell>
