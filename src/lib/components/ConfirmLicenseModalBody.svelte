<script lang="ts">
	import { licenseStore } from '$lib/store/license-store.svelte';

	const licenseSections = [
		{
			sectionHeading: 'License #: ',
			conditional: licenseStore.licenseNumber.length > 0,
			value: licenseStore.licenseNumber
		},
		{
			sectionHeading: 'First Name: ',
			conditional: licenseStore.firstName.length > 0,
			value: licenseStore.firstName
		},
		{
			sectionHeading: 'Second Name: ',
			conditional: licenseStore.secondName.length > 0,
			value: licenseStore.secondName
		},
		{
			sectionHeading: 'Birthday: ',
			conditional: licenseStore.birthday,
			value: licenseStore.birthday
		},
		{
			sectionHeading: 'Species: ',
			conditional: licenseStore.species,
			value: licenseStore.species
		},
		{
			sectionHeading: 'Country: ',
			conditional: licenseStore.country.label,
			value: licenseStore.country.label.length > 0
		},
		{
			sectionHeading: 'Gender: ',
			conditional: licenseStore.gender,
			value: licenseStore.gender.length > 0
		},
		{
			sectionHeading: 'Height: ',
			conditional: licenseStore.height,
			value: licenseStore.height.length > 0
		},
		{
			sectionHeading: 'Eyes: ',
			conditional: licenseStore.eyes,
			value: licenseStore.eyes.length > 0
		}
	];
</script>

<div class="flex gap-8 px-6 pt-2 pb-6">
	<div class="flex flex-col gap-4">
		<h2 class="text-primary text-2xl font-bold">General Information</h2>
		{#each licenseSections as section}
			<div class="flex gap-2">
				<h3 class="text-secondary font-bold">{section.sectionHeading}</h3>
				<span>
					{section.conditional ? section.value : 'Nothing Entered'}
				</span>
			</div>
		{/each}
	</div>
	<div class="w-px max-w-px flex-1 bg-black dark:bg-white"></div>
	<div class="flex flex-col gap-2">
		<h2 class="text-primary text-2xl font-bold">Image Preview</h2>
		<img
			src={licenseStore.mainPhoto}
			alt="Final Preview"
			class="aspect-square h-[30vh] object-scale-down"
		/>
		<h2 class="text-primary pt-4 text-2xl font-bold">Signature Preview</h2>
		{#each licenseStore.signature as layer}
			<svg
				class="pointer-events-none w-[30vw] fill-black"
				viewBox="0 0 {layer.width} {layer.height}"
			>
				<path d={layer.path} />
			</svg>
		{/each}
	</div>
</div>
