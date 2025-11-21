<script lang="ts">
	import FormSection1 from '$lib/components/form-sections/FormSection1.svelte';
	import FormSection2 from '$lib/components/form-sections/FormSection2.svelte';
	import FormSection3 from '$lib/components/form-sections/FormSection3.svelte';
	import FormSection4 from '$lib/components/form-sections/FormSection4.svelte';
	import FormSection5 from '$lib/components/form-sections/FormSection5.svelte';
	import FormStepper from '$lib/components/FormStepper.svelte';

	let stepValue = $state<number | undefined>();
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
		{:else if stepValue === 4}
			<FormSection4 />
		{:else if stepValue === 5}
			<FormSection5 />
		{/if}
	</div>
</div>
