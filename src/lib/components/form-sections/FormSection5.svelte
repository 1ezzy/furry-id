<script lang="ts">
	import { MenuField, type MenuOption } from 'svelte-ux';
	import type { InputField } from '$lib/constants/input-field.interface';
	import ColorInputSection from '$lib/components/input-sections/ColorInputSection.svelte';
	import GradientDirectionInputSection from '../input-sections/GradientDirectionInputSection.svelte';
	import { BackgroundType } from '$lib/constants/background-type.enum';

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

	let selectedBackgroundType = $state<number>(1);
	let options: MenuOption[] = [
		{ label: BackgroundType.gradient, value: 1 },
		{ label: BackgroundType.solid, value: 2 },
		{ label: BackgroundType.pattern, value: 3 }
	];
</script>

<div class="flex flex-1 flex-col gap-4 2xl:gap-8">
	<h2 class="text-primary text-2xl">Background and Colors</h2>
	<MenuField label="Background Type" {options} bind:value={selectedBackgroundType} />
	{#if selectedBackgroundType === 1}
		<ColorInputSection section={gradientColorSection} />
		<GradientDirectionInputSection />
	{/if}
</div>
