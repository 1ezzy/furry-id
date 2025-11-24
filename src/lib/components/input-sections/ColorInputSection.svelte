<script lang="ts">
	import { Button, Field } from 'svelte-ux';
	import ColorPicker from 'svelte-awesome-color-picker';
	import ColorPickerWrapper from '$lib/components/input-sections/ColorPickerWrapper.svelte';
	import type { InputField } from '$lib/constants/input-field.interface';
	import { basisClasses } from '$lib/constants/basis-classes';
	import { licenseStore } from '$lib/store/license-store.svelte';
	import { randomizeColors } from '$lib/utils/generate-random-hex';
	import { LucideRefreshCcw } from '@lucide/svelte';

	let { section }: { section: { sectionHeader: string; fields: InputField[] } } = $props();
	let pickerStates = $state<boolean[]>(section.fields.map(() => false));
</script>

<div class="flex flex-col gap-2">
	<h3 class="text-primary text-2xl">{section.sectionHeader}</h3>
	<div class="flex items-center gap-2">
		{#each section.fields as field, index}
			<Field class={basisClasses[field.basis]} label={field.label}>
				<ColorPicker
					bind:hex={licenseStore[field.key] as string}
					bind:isOpen={pickerStates[index]}
					position="responsive"
					isAlpha={false}
					textInputModes={['hex']}
					label={licenseStore[field.key] as string}
					components={{ wrapper: ColorPickerWrapper }}
				/>
			</Field>
		{/each}
	</div>
	<Button icon={LucideRefreshCcw} variant="fill" color="primary" onclick={randomizeColors}>
		Randomize Color{section.fields.length > 1 ? 's' : ''}
	</Button>
</div>
