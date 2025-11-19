<script lang="ts">
	import { Button } from 'svelte-ux';

	let { viewchange } = $props();
</script>

<div class="flex items-center gap-4 pr-4">
	<Button
		color="primary"
		variant="fill"
		class="aspect-square h-10 w-10 rounded-full"
		aria-label="Section 1"
		onclick={() => {
			viewchange(1);
		}}>1</Button
	>
	<div class="bg-primary h-px flex-1"></div>
	<Button
		color="primary"
		variant="fill"
		class="aspect-square h-10 w-10 rounded-full"
		aria-label="Section 1"
		onclick={() => {
			viewchange(2);
		}}>2</Button
	>
	<div class="bg-primary h-px flex-1"></div>
	<Button
		color="primary"
		variant="fill"
		class="aspect-square h-10 w-10 rounded-full"
		aria-label="Section 1"
		onclick={() => {
			viewchange(2);
		}}>2</Button
	>
	<div class="bg-primary h-px flex-1"></div>
	<Button
		color="primary"
		variant="fill"
		class="aspect-square h-10 w-10 rounded-full"
		aria-label="Section 1"
		onclick={() => {
			viewchange(2);
		}}>2</Button
	>
</div>
