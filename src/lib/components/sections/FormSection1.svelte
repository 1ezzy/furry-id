<script lang="ts">
	import type { InputField } from '$lib/constants/input-field.interface';
	import InputSection from './InputSection.svelte';
	import DateInputSection from './DateInputSection.svelte';

	export const sections: {
		sectionHeader: string;
		fields: InputField[];
	}[] = [
		{
			sectionHeader: 'Sections 1',
			fields: [{ key: 'licenseNumber', label: 'License #', basis: '1/1', maxlength: 8 }]
		},
		{
			sectionHeader: 'Sections 2,3',
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
		}
	];
</script>

{#each sections as section}
	{#if section.sectionHeader === 'Section 4'}
		<DateInputSection {section}></DateInputSection>
	{:else}
		<InputSection {section}></InputSection>
	{/if}
{/each}
