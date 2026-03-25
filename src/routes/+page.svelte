<script lang="ts">
	import html2canvas from 'html2canvas-pro';
	import { Button } from 'svelte-ux';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import AllFormSections from '$lib/components/form-sections/AllFormSections.svelte';
	import LicenseOverlay from '$lib/components/license/LicenseOverlay.svelte';
	import LicenseOverlayExport from '$lib/components/license/LicenseOverlayExport.svelte';
	import PageShell from '$lib/components/PageShell.svelte';
	import { licenseStore } from '$lib/store/license-store.svelte';
	import { licenseSchema } from '$lib/store/license-store-schema';
	import ConfirmLicenseModal from '$lib/components/ConfirmLicenseModal.svelte';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';

	let confirmImageModalOpen = $state<boolean>(false);
	let generationError = $state<string>('');

	const { form, allErrors } = superForm(
		{
			firstName: licenseStore.firstName,
			secondName: licenseStore.secondName,
			birthday: licenseStore.birthday,
			species: licenseStore.species,
			country: licenseStore.country,
			licenseNumber: licenseStore.licenseNumber,
			gender: licenseStore.gender,
			height: licenseStore.height,
			eyes: licenseStore.eyes
		},
		{
			SPA: true,
			validators: zodClient(licenseSchema as unknown as Parameters<typeof zodClient>[0]),
			dataType: 'json'
		}
	);

	$effect(() => {
		$form = {
			firstName: licenseStore.firstName,
			secondName: licenseStore.secondName,
			birthday: licenseStore.birthday,
			species: licenseStore.species,
			country: licenseStore.country,
			licenseNumber: licenseStore.licenseNumber,
			gender: licenseStore.gender,
			height: licenseStore.height,
			eyes: licenseStore.eyes
		};
	});
	const isFormValid = $derived($allErrors.length === 0 && licenseStore.isValid);

	const generateImage = () => {
		generationError = '';
		const licenseOverlay = document.getElementById('license-overlay-export');

		if (licenseOverlay) {
			html2canvas(licenseOverlay, {
				useCORS: true,
				backgroundColor: null
			})
				.then((canvas) => {
					const dataUrl = canvas.toDataURL('image/png');
					licenseStore.generatedLicenseImage = dataUrl;
					goto(resolve('/result'));
				})
				.catch((err) => {
					console.error('License generation failed:', err);
					generationError = 'Failed to generate license. Please try again.';
					confirmImageModalOpen = false;
				});
		}
	};
</script>

<ConfirmLicenseModal bind:open={confirmImageModalOpen} {isFormValid} onconfirm={generateImage}
></ConfirmLicenseModal>

<LicenseOverlayExport />

<PageShell>
	<h1
		class="dark:from-primary dark:to-secondary flex bg-linear-to-tr from-rose-500 to-sky-500 bg-clip-text py-1 text-center text-6xl text-transparent md:text-start"
	>
		Furry License Generator
	</h1>
	<div
		class="flex h-fit w-full flex-1 flex-col items-start gap-16 md:h-0 md:flex-row xl:gap-24 2xl:gap-40"
	>
		<div class="flex w-full basis-3/5 flex-col gap-4 lg:gap-8 2xl:gap-16">
			<LicenseOverlay />
			<div class="flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-16">
				<h2 class="text-secondary text-3xl font-bold">[License Preview]</h2>
				<Button
					class="h-14 w-full flex-1"
					variant="fill"
					color="success"
					size="lg"
					onclick={() => {
						confirmImageModalOpen = true;
					}}
				>
					Generate License!
				</Button>
			</div>
			{#if generationError}
				<span class="text-danger text-center text-sm font-semibold">{generationError}</span>
			{/if}
		</div>
		<div class="flex w-full flex-1 basis-2/5 flex-col gap-8 overflow-y-auto md:h-full">
			<AllFormSections oncreate={() => (confirmImageModalOpen = true)} />
		</div>
	</div>
</PageShell>
