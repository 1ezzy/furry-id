<script lang="ts">
	import FormSection1 from '$lib/components/form-sections/FormSection1.svelte';
	import FormSection2 from '$lib/components/form-sections/FormSection2.svelte';
	import FormSection3 from '$lib/components/form-sections/FormSection3.svelte';
	import FormStepper from '$lib/components/FormStepper.svelte';

	let stepValue: number | undefined = $state();
</script>

<div class="flex h-full flex-col justify-between gap-4 overflow-y-auto 2xl:gap-8">
	<FormStepper
		stepchange={(index: number) => {
			stepValue = index;
		}}
	/>
	<div class="flex h-full flex-col justify-between gap-4 pr-0 md:overflow-y-auto md:pr-4">
		{#if stepValue === 1}
			<FormSection1 />
		{:else if stepValue === 2}
			<FormSection2 />
		{:else if stepValue === 3}
			<FormSection3 />
		{/if}
	</div>
</div>
