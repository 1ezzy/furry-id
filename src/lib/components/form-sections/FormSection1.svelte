<script lang="ts">
	import type { InputField } from '$lib/constants/input-field.interface';
	import InputSection from '$lib/components/input-sections/InputSection.svelte';
	import DateInputSection from '$lib/components/input-sections/DateInputSection.svelte';
	import CountryInputSection from '$lib/components/input-sections/CountryInputSection.svelte';

	export const sections: {
		sectionHeader: string;
		fields: InputField[];
	}[] = [
		{
			sectionHeader: 'Sections 2, 3',
			fields: [
				{ key: 'firstName', label: 'First Name', basis: '1/2', maxlength: 24 },
				{ key: 'secondName', label: 'Second Name', basis: '1/2', maxlength: 24 }
			]
		},
		{
			sectionHeader: 'Section 4',
			fields: [{ key: 'birthday', label: 'Birthday', basis: '1/1' }]
		},
		{
			sectionHeader: 'Section 5',
			fields: [{ key: 'species', label: 'Species', basis: '1/1', maxlength: 16 }]
		},
		{
			sectionHeader: 'Section 6',
			fields: [{ key: 'country', label: 'Country', basis: '1/1', maxlength: 30 }]
		}
	];
</script>

<div class="flex flex-col gap-4 2xl:gap-8">
	{#each sections as section}
		{#if section.sectionHeader === 'Section 4'}
			<DateInputSection {section} />
		{:else if section.sectionHeader === 'Section 6'}
			<CountryInputSection {section} />
		{:else}
			<InputSection {section} />
		{/if}
	{/each}
</div>
