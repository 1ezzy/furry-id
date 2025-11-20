<script lang="ts">
	import { Button } from 'svelte-ux';
	import { LucideHatGlasses, LucidePencilRuler } from '@lucide/svelte';

	let { viewchange } = $props();
</script>

<div class="flex items-center gap-4 pr-4">
	<Button
		class="stepper-icon flex aspect-square h-10 w-10"
		color="primary"
		variant="fill"
		icon={LucideHatGlasses}
		aria-label="Section 1"
		onclick={() => {
			viewchange(1);
		}}
	></Button>
	<div class="bg-primary h-px flex-1"></div>
	<Button
		class="stepper-icon flex aspect-square h-10 w-10"
		color="primary"
		variant="fill"
		icon={LucidePencilRuler}
		aria-label="Section 2"
		onclick={() => {
			viewchange(2);
		}}
	></Button>
</div>
