<script lang="ts">
	import { Button, Dialog, Tooltip } from 'svelte-ux';
	import { toPng } from 'html-to-image';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import AllFormSections from '$lib/components/form-sections/AllFormSections.svelte';
	import LicenseOverlay from '$lib/components/license/LicenseOverlay.svelte';
	import PageShell from '$lib/components/PageShell.svelte';
	import ConfirmLicenseModalBody from '$lib/components/ConfirmLicenseModalBody.svelte';
	import { licenseStore } from '$lib/store/license-store.svelte';
	import { licenseSchema } from '$lib/store/license-store-schema';

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

	const generateImage = () => {
		const licenseOverlay = document.getElementById('license-overlay');

		if (licenseOverlay) {
			toPng(licenseOverlay, {
				canvasWidth: 1350,
				canvasHeight: 850,
				pixelRatio: 1,
				fontEmbedCSS: `
                    @import url('https://fonts.googleapis.com/css2?family=Gamja+Flower&display=swap');
                    @import url('https://fonts.googleapis.com/css2?family=Arial+Narrow&display=swap');
                `
			})
				.then((dataUrl) => {
					// do stuff with the generated image
				})
				.catch((err) => {
					console.error('oops, something went wrong!', err);
				});
		}
	};
</script>

<Dialog bind:open={confirmImageModalOpen}>
	<div class="text-primary mb-2 text-6xl" slot="title">Confirm License Details</div>
	<ConfirmLicenseModalBody />
	<div slot="actions" class="flex w-full items-center gap-2 px-2">
		<div class="flex-1">
			{#if !isFormValid}
				<span class="text-danger text-xl font-bold">You have incomplete fields!</span>
			{:else}
				<span class="text-success text-xl font-bold">All fields have been completed!</span>
			{/if}
		</div>
		<Button variant="fill" color="danger" onclick={() => (confirmImageModalOpen = false)}>
			Cancel
		</Button>
		<Tooltip
			title={!isFormValid ? 'You must complete all fields to generate a license.' : ''}
			placement="top"
			offset={4}
		>
			<div>
				<Button variant="fill" color="success" onclick={generateImage} disabled={!isFormValid}>
					Confirm
				</Button>
			</div>
		</Tooltip>
	</div>
</Dialog>

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
