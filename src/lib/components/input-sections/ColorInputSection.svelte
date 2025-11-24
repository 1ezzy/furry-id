<script lang="ts">
	import { Field } from 'svelte-ux';
	import ColorPicker from 'svelte-awesome-color-picker';
	import ColorPickerWrapper from '$lib/components/input-sections/ColorPickerWrapper.svelte';
	import type { InputField } from '$lib/constants/input-field.interface';
	import { basisClasses } from '$lib/constants/basis-classes';

	let { section }: { section: { sectionHeader: string; fields: InputField[] } } = $props();

	let colors = $state<string[]>(section.fields.map(() => '#000000'));
	let pickerStates = $state<boolean[]>(section.fields.map(() => false));
</script>

<div class="flex flex-col gap-2">
	<h3 class="text-primary text-2xl">{section.sectionHeader}</h3>
	<div class="flex gap-2">
		{#each section.fields as field, index}
			<Field class={basisClasses[field.basis]} label={field.label}>
				<ColorPicker
					bind:hex={colors[index]}
					bind:isOpen={pickerStates[index]}
					position="responsive"
					components={{ wrapper: ColorPickerWrapper }}
				/>
			</Field>
		{/each}
	</div>
</div>
