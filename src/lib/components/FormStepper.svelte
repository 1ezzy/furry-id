<script lang="ts">
	import { Button } from 'svelte-ux';
	import {
		LucideHatGlasses,
		LucidePencilRuler,
		LucideImage,
		LucideSignature,
		LucidePalette
	} from '@lucide/svelte';

	let { stepchange } = $props();
	let stepValue = $state<number>(1);

	$effect(() => {
		stepchange(stepValue);
	});

	const buttons = [
		{ icon: LucideHatGlasses },
		{ icon: LucidePencilRuler },
		{ icon: LucideImage },
		{ icon: LucideSignature },
		{ icon: LucidePalette }
	];
</script>

{#snippet stepperButton(index: number, icon)}
	<Button
		class="icon flex aspect-square h-8 w-8 lg:h-10 lg:w-10 2xl:h-16 2xl:w-16"
		color={stepValue === index ? 'secondary' : 'primary'}
		variant="fill"
		{icon}
		aria-label="Section {index}"
		onclick={() => {
			stepValue = index;
		}}
	></Button>
{/snippet}

{#snippet changeSectionButtons()}
	<Button disabled={stepValue === 1} size="md" variant="outline" onclick={() => stepValue--}>
		Prev Page
	</Button>
	<Button
		disabled={stepValue === buttons.length}
		size="md"
		variant="outline"
		color="primary"
		onclick={() => stepValue++}
	>
		Next Page
	</Button>
{/snippet}

<div class="flex flex-col gap-8 2xl:gap-16">
	<div class="flex items-center justify-between gap-4 overflow-x-auto pr-4">
		{#each buttons as button, i (i)}
			{@render stepperButton(i + 1, button.icon)}
		{/each}
	</div>
	<div class="flex w-full flex-row justify-between pt-2 pr-0 md:pr-4">
		{@render changeSectionButtons()}
	</div>
</div>
