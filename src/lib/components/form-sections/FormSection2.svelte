<script lang="ts">
	import type { InputField } from '$lib/constants/input-field.interface';
	import InputSection from '$lib/components/input-sections/InputSection.svelte';
	import DateInputSection from '$lib/components/input-sections/DateInputSection.svelte';

	export const sections: {
		sectionHeader: string;
		fields: InputField[];
	}[] = [
		{
			sectionHeader: 'Section 1',
			fields: [{ key: 'licenseNumber', label: 'License #', basis: '1/1', maxlength: 8 }]
		},
		{
			sectionHeader: 'Section 9',
			fields: [{ key: 'gender', label: 'Gender', basis: '1/1', maxlength: 3 }]
		},
		{
			sectionHeader: 'Section 10',
			fields: [
				{
					key: 'height',
					label: 'Height',
					basis: '1/1',
					mask: ' -  ',
					replace: ' ',
					placeholder: '6-00'
				}
			]
		},
		{
			sectionHeader: 'Section 11',
			fields: [{ key: 'eyes', label: 'Eye Color', basis: '1/1', maxlength: 3 }]
		}
	];
</script>

<div class="flex flex-col gap-4 2xl:gap-8">
	{#each sections as section (section.fields)}
		{#if section.sectionHeader === 'Section 4'}
			<DateInputSection {section} />
		{:else}
			<InputSection {section} />
		{/if}
	{/each}
</div>
