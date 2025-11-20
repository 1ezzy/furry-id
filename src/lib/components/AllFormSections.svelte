<script lang="ts">
	import FormSection1 from '$lib/components/sections/FormSection1.svelte';
	import FormSection2 from '$lib/components/sections/FormSection2.svelte';
	import LicenseStepper from '$lib/components/LicenseStepper.svelte';

	let stepValue: number = 1;
</script>

<div class="flex flex-col gap-4 overflow-y-auto">
	<LicenseStepper
		viewchange={(value: number) => {
			stepValue = value;
		}}
	/>
	<div class="pr-0 md:overflow-y-auto md:pr-4">
		{#if stepValue === 1}
			<FormSection1></FormSection1>
		{:else if stepValue === 2}
			<FormSection2></FormSection2>
		{/if}
	</div>
</div>
