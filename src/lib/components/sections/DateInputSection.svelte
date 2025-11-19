<script lang="ts">
	import { DateField } from 'svelte-ux';
	import { basisClasses } from '$lib/constants/basis-classes';
	import type { InputField } from '$lib/constants/input-field.interface';

	let { section }: { section: { sectionHeader: string; fields: InputField[] } } = $props();
</script>

<div class="flex flex-col gap-2">
	<h3 class="text-primary text-2xl">{section.sectionHeader}</h3>
	<div class="flex gap-2">
		{#each section.fields as field}
			<DateField
				class={basisClasses[field.basis]}
				label={field.label}
				on:change={(e) => {}}
				picker
				clearable
			/>
		{/each}
	</div>
</div>
