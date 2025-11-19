<script lang="ts">
	import AllFormSections from '$lib/components/AllFormSections.svelte';
	import LicenseOverlay from '$lib/components/overlay/LicenseOverlay.svelte';
	import PageShell from '$lib/components/PageShell.svelte';

	const title = 'Furry License Generator';
</script>

<PageShell>
	<h1
		class="from-primary to-secondary flex bg-linear-to-tr bg-clip-text py-1 text-center text-6xl text-transparent md:text-start"
	>
		{title}
	</h1>
	<div class="flex h-fit w-full items-center">
		<div class="flex h-full w-full flex-col items-start gap-24 md:flex-row">
			<div class="flex w-full basis-3/5 flex-col gap-2">
				<h2 class="text-secondary text-2xl font-bold">[Preview]</h2>
				<div
					class="from-primary to-secondary relative flex aspect-214/135 rounded-2xl bg-linear-to-tr"
				>
					<div
						class="h-full w-full rounded-2xl bg-[url('/license.jpeg')] bg-cover bg-center opacity-30"
					></div>
					<LicenseOverlay></LicenseOverlay>
				</div>
			</div>
			<div class="flex w-full flex-1 basis-2/5 flex-col gap-8">
				<AllFormSections></AllFormSections>
			</div>
		</div>
	</div>
</PageShell>
