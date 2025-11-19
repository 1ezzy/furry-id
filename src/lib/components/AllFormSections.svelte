<script lang="ts">
	import { Button } from 'svelte-ux';
	import FormSection1 from '$lib/components/FormSection1.svelte';
	import FormSection2 from '$lib/components/FormSection2.svelte';
	import LicenseStepper from '$lib/components/LicenseStepper.svelte';

	let stepValue: number = 1;
</script>

<div class="flex flex-col gap-8">
	<LicenseStepper
		viewchange={(value: number) => {
			stepValue = value;
		}}
	/>
	{#if stepValue === 1}
		<FormSection1></FormSection1>
	{:else if stepValue === 2}
		<FormSection2></FormSection2>
	{/if}
</div>
