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

<div class="flex flex-col gap-8 px-6 pt-2 pb-6 md:flex-row">
	<div class="flex flex-col gap-4">
		<h2
			class="text-2xl font-bold"
			class:text-success={licenseStore.isValid}
			class:text-danger={!licenseStore.isValid}
		>
			General Information
		</h2>
		{#each licenseSections as section}
			<div class="flex gap-2">
				<h3 class="font-bold" class:text-success={section.value} class:text-danger={!section.value}>
					{section.sectionHeading}
				</h3>
				<span>
					{section.conditional ? section.value : 'Nothing Entered'}
				</span>
			</div>
		{/each}
	</div>
	<div
		class="h-px max-h-px bg-black md:h-full md:max-h-full md:w-px md:max-w-px md:flex-1 dark:bg-white"
	></div>
	<div class="flex flex-col gap-2">
		<h2
			class="text-2xl font-bold"
			class:text-success={licenseStore.mainPhoto}
			class:text-danger={!licenseStore.mainPhoto}
		>
			Image Preview
		</h2>
		{#if licenseStore.mainPhoto}
			<img
				src={licenseStore.mainPhoto}
				alt="Final Preview"
				class="aspect-square h-[30vh] object-scale-down"
			/>
		{:else}
			<div
				class="bg-surface-300 flex aspect-square h-[30vh] items-center justify-center rounded-2xl"
			>
				<span>Nothing To Show</span>
			</div>
		{/if}
		<h2
			class="pt-4 text-2xl font-bold"
			class:text-success={licenseStore.signature[0]}
			class:text-danger={!licenseStore.signature[0]}
		>
			Signature Preview
		</h2>
		{#if licenseStore.signature[0]}
			{#each licenseStore.signature as layer}
				<svg
					class="pointer-events-none w-[30vw] fill-black"
					viewBox="0 0 {layer.width} {layer.height}"
				>
					<path d={layer.path} />
				</svg>
			{/each}
		{:else}
			<div
				class="bg-surface-300 flex aspect-4/1 h-full w-[30vw] items-center justify-center rounded-2xl"
			>
				<span>Nothing To Show</span>
			</div>
		{/if}
	</div>
</div>
