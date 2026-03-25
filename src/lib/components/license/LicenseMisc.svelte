<script lang="ts">
	import { Icon } from 'svelte-ux';
	import { LucidePawPrint } from '@lucide/svelte';
	import { licenseStore } from '$lib/store/license-store.svelte';
	import { formatDateForLicense } from '$lib/utils/format-date-for-license';

	let flagSrc = $derived<string>(
		licenseStore.country.value ? `https://flagcdn.com/${licenseStore.country.value}.svg` : ''
	);

	const licenseTitleClass = "font-['Roboto_Condensed'] text-[3.2cqw] font-bold text-black italic";
	const countryFlagClass = 'h-full w-[9.5cqw] rounded-md';
	const pawPrintClass = 'h-[8.8cqw] w-[8.8cqw] fill-black stroke-1';
	const secondaryLabelsClass = 'font-[Roboto] text-[2.3cqw] font-bold text-black';
</script>

<!-- Title -->
<div class="absolute top-[6.5%] left-[25.5%] flex h-fit items-center">
	<span class={licenseTitleClass}> FURRY LICENSE </span>
</div>

<!-- Country Flag in Place of State Name -->
<div class="absolute top-[5%] left-[4%] flex h-fit items-center justify-center">
	{#if licenseStore.country.value}
		<img class={countryFlagClass} src={flagSrc} alt={licenseStore.country.label} />
	{/if}
</div>

<!-- Paw Print in place of State -->
<div class="absolute top-[4%] left-[86%] h-fit">
	<Icon color="black" class={pawPrintClass} data={LucidePawPrint} />
</div>

<!-- Main Photo -->
<div
	class="absolute top-[25%] left-[4%] flex h-[54%] w-[26%] items-center justify-center rounded-md bg-gray-100 md:rounded-2xl"
>
	{#if licenseStore.mainPhoto}
		<img
			src={licenseStore.mainPhoto}
			alt="Main Headshot"
			class="h-full w-full rounded-2xl object-scale-down"
		/>
	{/if}
</div>

<!-- Main Signature -->
<div class="absolute top-[80%] left-[5%] flex aspect-4/1 h-[9.5%] items-center justify-center">
	{#each licenseStore.signature as layer (layer.path)}
		<svg
			class="pointer-events-none absolute h-full w-full fill-black"
			viewBox="0 0 {layer.width} {layer.height}"
		>
			<path d={layer.path} />
		</svg>
	{/each}
</div>

<!-- Secondary Photo With License #, Signature, and Birthday -->
<div
	class="absolute top-[72%] left-[65.5%] h-[15%] w-[25%] rounded-sm bg-gray-100 md:rounded-lg"
></div>
<div class="absolute top-[72%] left-[67%] flex h-fit items-center">
	<span class={secondaryLabelsClass} class:opacity-60={licenseStore.licenseNumber.length === 0}>
		{licenseStore.licenseNumber.length > 0 ? licenseStore.licenseNumber.toUpperCase() : 'AB123456'}
	</span>
</div>
<div class="absolute top-[78%] left-[69%] flex aspect-4/1 h-[3%] items-center justify-center">
	{#each licenseStore.signature as layer (layer.path)}
		<svg
			class="pointer-events-none absolute h-full w-full fill-black"
			viewBox="0 0 {layer.width} {layer.height}"
		>
			<path d={layer.path} />
		</svg>
	{/each}
</div>
<div class="absolute top-[82%] left-[67%] flex h-fit items-center">
	<span class={secondaryLabelsClass} class:opacity-60={licenseStore.birthday === null}>
		{licenseStore.birthday !== null ? formatDateForLicense(licenseStore.birthday) : '01/01/2000'}
	</span>
</div>
<div
	class="absolute top-[69.5%] left-[82.5%] flex aspect-square h-[20%] items-center justify-center rounded-full bg-gray-100"
>
	{#if licenseStore.mainPhoto}
		<img
			src={licenseStore.mainPhoto}
			alt="Secondary Headshot"
			class="aspect-square h-[70%] rounded-full object-scale-down"
		/>
	{/if}
</div>
