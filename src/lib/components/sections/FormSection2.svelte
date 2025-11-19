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
			fields: [{ label: 'License #', basis: '1/1' }]
		},
		{
			sectionHeader: 'Sections 2,3',
			fields: [
				{ label: 'First Name', basis: '1/2' },
				{ label: 'Second Name', basis: '1/2' }
			]
		},
		{
			sectionHeader: 'Section 4',
			fields: [{ label: 'Birthday', basis: '1/1' }]
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
