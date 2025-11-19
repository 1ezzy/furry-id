<script lang="ts">
	import { Field, Input } from 'svelte-ux';
	import { type BasisKey, basisClasses } from '$lib/constants/basis-classes';

	export const sections: {
		sectionHeader: string;
		fields: { label: string; basis: BasisKey }[];
	}[] = [
		{
			sectionHeader: 'Sections 1, 2 (Name)',
			fields: [
				{ label: 'First Name', basis: '1/2' },
				{ label: 'Second Name', basis: '1/2' }
			]
		},
		{
			sectionHeader: 'Section 3 (DOB)',
			fields: [
				{ label: 'Month', basis: '1/4' },
				{ label: 'Day', basis: '1/4' },
				{ label: 'Year', basis: '1/2' }
			]
		},
		{
			sectionHeader: 'Sections 4a, 4b, 4d (Misc.)',
			fields: [
				{ label: 'Personal ID Number', basis: '1/2' },
				{ label: 'Expiration Date', basis: '1/2' },
				{ label: 'License Number', basis: '1/2' }
			]
		}
	];
</script>

{#each sections as section}
	<div class="flex flex-col gap-2">
		<h3 class="text-primary text-2xl">{section.sectionHeader}</h3>
		<div class="flex gap-2">
			{#each section.fields as field}
				<Field class={basisClasses[field.basis]} label={field.label} let:id>
					<Input {id} />
				</Field>
			{/each}
		</div>
	</div>
{/each}
