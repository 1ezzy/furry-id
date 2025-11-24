<script lang="ts">
	import { Button } from 'svelte-ux';
	import { toPng } from 'html-to-image';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import AllFormSections from '$lib/components/form-sections/AllFormSections.svelte';
	import LicenseOverlay from '$lib/components/license/LicenseOverlay.svelte';
	import PageShell from '$lib/components/PageShell.svelte';
	import { licenseStore } from '$lib/store/license-store.svelte';
	import { licenseSchema } from '$lib/store/license-store-schema';
	import ConfirmLicenseModal from '$lib/components/ConfirmLicenseModal.svelte';
	import { goto } from '$app/navigation';

	let confirmImageModalOpen = $state<boolean>(false);

	const { form, errors, validate, validateForm, allErrors } = superForm(
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
			validators: zodClient(licenseSchema as any),
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

	const generateImage = async () => {
		const licenseOverlay = document.getElementById('license-overlay');

		if (licenseOverlay) {
			const fontEmbedCSS = `
			@font-face {
				font-family: 'Gamja Flower';
				src: url('/fonts/GamjaFlower-Regular.tff') format('truetype');
				font-weight: normal;
				font-style: normal;
			}
			@font-face {
				font-family: 'Roboto Condensed';
				src: url('/fonts/RobotoCondensed-Regular.tff') format('truetype');
				font-weight: normal;
				font-style: normal;
			}
      `;

			try {
				const dataUrl = await toPng(licenseOverlay, {
					canvasWidth: 2140,
					canvasHeight: 1350,
					pixelRatio: 2,
					fontEmbedCSS
				});
				licenseStore.generatedLicenseImage = dataUrl;
				goto('/result');
			} catch (err) {
				console.error('oops, something went wrong!', err);
			}
		}
	};
</script>

<ConfirmLicenseModal bind:open={confirmImageModalOpen} {isFormValid} onconfirm={generateImage}
></ConfirmLicenseModal>

<PageShell>
	<h1
		class="from-primary to-secondary flex bg-linear-to-tr bg-clip-text py-1 text-center text-6xl text-transparent md:text-start"
	>
		Furry License Generator
	</h1>
	<div
		class="flex h-fit w-full flex-1 flex-col items-start gap-16 md:h-0 md:flex-row xl:gap-24 2xl:gap-40"
	>
		<div class="flex w-full basis-3/5 flex-col gap-4 lg:gap-8 2xl:gap-16">
			<LicenseOverlay />
			<div class="flex items-center justify-between gap-16">
				<h2 class="text-secondary text-4xl font-bold">[Preview]</h2>
				<Button
					class="flex-1"
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
		</div>
		<div class="flex w-full flex-1 basis-2/5 flex-col gap-8 overflow-y-auto md:h-full">
			<AllFormSections />
		</div>
	</div>
</PageShell>
