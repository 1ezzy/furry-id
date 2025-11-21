<script lang="ts">
	import { Field } from 'svelte-ux';
	import ColorPicker from 'svelte-awesome-color-picker';
	import type { InputField } from '$lib/constants/input-field.interface';
	import { basisClasses } from '$lib/constants/basis-classes';

	let { section }: { section: { sectionHeader: string; fields: InputField[] } } = $props();

	let colors = $state<string[]>(section.fields.map(() => '#000000'));
</script>

<div class="flex flex-col gap-2">
	<h3 class="text-primary text-2xl">{section.sectionHeader}</h3>
	<div class="flex gap-2">
		{#each section.fields as field, index}
			<Field class={basisClasses[field.basis]} label={field.label}>
				<div class="theme">
					<ColorPicker position="responsive" bind:hex={colors[index]} />
				</div>
			</Field>
		{/each}
	</div>
</div>

<style>
	.theme {
		--cp-bg-color: var(--color-surface-100);
		--cp-border-color: var(--color-border);
		--cp-text-color: var(--color-border);
		--cp-input-color: var(--color-surface-300);
		--cp-button-hover-color: var(--color-surface-200);
	}
</style>
