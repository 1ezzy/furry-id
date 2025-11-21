<script lang="ts">
	import { Field } from 'svelte-ux';
	import ColorPicker from 'svelte-awesome-color-picker';
	import type { InputField } from '$lib/constants/input-field.interface';
	import { basisClasses } from '$lib/constants/basis-classes';

	let { section }: { section: { sectionHeader: string; fields: InputField[] } } = $props();

	let hex = $state<string>('#000000');
</script>

<div class="flex flex-col gap-2">
	<h3 class="text-primary text-2xl">{section.sectionHeader}</h3>
	<div class="flex gap-2">
		{#each section.fields as field}
			<Field class={basisClasses[field.basis]} label={field.label}>
				<ColorPicker bind:hex position="responsive" />
			</Field>
		{/each}
	</div>
</div>
