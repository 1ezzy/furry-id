<script lang="ts">
	import FormSection1 from '$lib/components/sections/FormSection1.svelte';
	import FormSection2 from '$lib/components/sections/FormSection2.svelte';
	import LicenseStepper from '$lib/components/FormStepper.svelte';
	import { Button } from 'svelte-ux';

	let stepValue: number = 1;
</script>

<div class="flex flex-col justify-between gap-4 overflow-y-auto">
	<LicenseStepper
		viewchange={(value: number) => {
			stepValue = value;
		}}
	/>
	<div class="flex w-full flex-row justify-between pt-2 pr-0 md:pr-4">
		<Button disabled={stepValue === 1} size="md" variant="outline" onclick={() => stepValue--}>
			Prev Page
		</Button>
		<Button
			disabled={stepValue === 3}
			size="md"
			variant="outline"
			color="primary"
			onclick={() => stepValue++}
		>
			Next Page
		</Button>
	</div>
	<div class="flex flex-col justify-between gap-4 pr-0 md:overflow-y-auto md:pr-4">
		{#if stepValue === 1}
			<FormSection1></FormSection1>
		{:else if stepValue === 2}
			<FormSection2></FormSection2>
		{/if}
	</div>
</div>
