<script lang="ts">
	import { Button } from 'svelte-ux';
	import {
		LucideHatGlasses,
		LucidePencilRuler,
		LucideImage,
		LucideSignature,
		LucidePalette,
		LucideCircleCheckBig
	} from '@lucide/svelte';

	let { stepchange } = $props();
	let stepValue: number = $state(1);

	$effect(() => {
		stepchange(stepValue);
	});

	const buttons = [
		{ icon: LucideHatGlasses },
		{ icon: LucidePencilRuler },
		{ icon: LucideImage },
		{ icon: LucideSignature },
		{ icon: LucidePalette },
		{ icon: LucideCircleCheckBig }
	];
</script>

{#snippet stepperButton(index: number, icon: any)}
	<Button
		class="stepper-icon flex aspect-square h-10 w-10"
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

<div class="flex flex-col gap-4 2xl:gap-8">
	<div
		class="flex items-center justify-between gap-4 overflow-x-auto pr-4 md:grid md:grid-cols-3 md:grid-rows-2 lg:flex lg:justify-between md:[&>*:nth-child(3n+1)]:justify-self-start md:[&>*:nth-child(3n+2)]:justify-self-center md:[&>*:nth-child(3n+3)]:justify-self-end"
	>
		{#each buttons as button, i}
			{@render stepperButton(i + 1, button.icon)}
		{/each}
	</div>
	<div class="flex w-full flex-row justify-between pt-2 pr-0 md:pr-4">
		{@render changeSectionButtons()}
	</div>
</div>
