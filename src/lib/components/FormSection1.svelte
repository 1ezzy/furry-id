<script lang="ts">
	import { DateField, Field, Input } from 'svelte-ux';
	import { type BasisKey, basisClasses } from '$lib/constants/basis-classes';

	export const sections: {
		sectionHeader: string;
		fields?: { label: string; basis: BasisKey }[];
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
			sectionHeader: 'Section 4'
		}
	];
</script>

<div class="flex flex-col gap-2">
	<h3 class="text-primary text-2xl">{sections[0].sectionHeader}</h3>
	<div class="flex gap-2">
		{#each sections[0].fields as field}
			<Field class={basisClasses[field.basis]} label={field.label} let:id>
				<Input {id} />
			</Field>
		{/each}
	</div>
</div>
<div class="flex flex-col gap-2">
	<h3 class="text-primary text-2xl">{sections[1].sectionHeader}</h3>
	<div class="flex gap-2">
		{#each sections[1].fields as field}
			<Field class={basisClasses[field.basis]} label={field.label} let:id>
				<Input {id} />
			</Field>
		{/each}
	</div>
</div>
<div class="flex flex-col gap-2">
	<h3 class="text-primary text-2xl">{sections[2].sectionHeader}</h3>
	<div class="flex gap-2">
		<DateField class="flex-1" label="Birthday" on:change={(e) => {}} picker clearable />
	</div>
</div>
