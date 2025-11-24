<script lang="ts">
	import { MenuField, type MenuOption } from 'svelte-ux';
	import ColorInputSection from '$lib/components/input-sections/ColorInputSection.svelte';
	import GradientDirectionInputSection from '$lib/components/input-sections/GradientDirectionInputSection.svelte';
	import type { InputField } from '$lib/constants/input-field.interface';
	import { BackgroundType } from '$lib/constants/background-type.enum';
	import { licenseStore } from '$lib/store/license-store.svelte';

	const gradientColorSection: {
		sectionHeader: string;
		fields: InputField[];
	} = {
		sectionHeader: 'Gradient Colors',
		fields: [
			{ key: 'primaryColor', label: 'Primary Color', basis: '1/2' },
			{ key: 'secondaryColor', label: 'Secondary Color', basis: '1/2' }
		]
	};

	const solidColorSection: {
		sectionHeader: string;
		fields: InputField[];
	} = {
		sectionHeader: 'Background Color',
		fields: [{ key: 'primaryColor', label: 'Color', basis: '1/1' }]
	};

	let selectedBackgroundType = $state<BackgroundType>(BackgroundType.gradient);
	let options: MenuOption[] = [
		{ label: BackgroundType.gradient, value: BackgroundType.gradient },
		{ label: BackgroundType.solid, value: BackgroundType.solid },
		{ label: BackgroundType.pattern, value: BackgroundType.pattern }
	];
	$effect(() => {
		licenseStore.backgroundType = selectedBackgroundType;
	});
</script>

<div class="flex flex-1 flex-col gap-4 2xl:gap-8">
	<h2 class="text-primary text-2xl">Background and Colors</h2>
	<MenuField label="Background Type" {options} bind:value={selectedBackgroundType} />
	{#if selectedBackgroundType === BackgroundType.gradient}
		<ColorInputSection section={gradientColorSection} />
		<GradientDirectionInputSection />
	{/if}
	{#if selectedBackgroundType === BackgroundType.solid}
		<ColorInputSection section={solidColorSection} />
	{/if}
</div>
