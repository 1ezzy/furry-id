<script lang="ts">
	import countries from 'world-countries';
	import { SelectField } from 'svelte-ux';
	import { basisClasses } from '$lib/constants/basis-classes';
	import { licenseStore } from '$lib/store/license-store.svelte';
	import type { InputField } from '$lib/constants/input-field.interface';

	let { section }: { section: { sectionHeader: string; fields: InputField[] } } = $props();

	const options = countries
		.map((country) => ({
			label: country.name.common,
			value: country.cca2.toLowerCase()
		}))
		.sort((a, b) => a.label.localeCompare(b.label));

	let selectedValue = $state<string>(licenseStore.country.value);
	$effect(() => {
		const selectedCountry = options.find((opt) => opt.value === selectedValue);
		if (selectedCountry) {
			licenseStore.country = {
				label: selectedCountry.label,
				value: selectedCountry.value
			};
		}
	});

	const updateCountry = () => {
		licenseStore.country = {
			label: '',
			value: ''
		};
	};
</script>

<div class="flex flex-col gap-2">
	<h3 class="text-primary text-2xl">{section.sectionHeader}</h3>
	<div class="flex gap-2">
		{#each section.fields as field (field.key)}
			<SelectField
				class={basisClasses[field.basis]}
				label={field.label}
				{options}
				bind:value={selectedValue}
				on:change={(val: CustomEvent) => {
					if (val.detail?.value === undefined) updateCountry();
				}}
			>
				<div slot="option" let:option>
					<div class="flex items-center gap-2">
						<span class="fi fi-{option.value} text-xs"></span>
						<span>{option.label}</span>
					</div>
				</div>
			</SelectField>
		{/each}
	</div>
</div>
