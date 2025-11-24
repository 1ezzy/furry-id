<script>
	import { Icon } from 'svelte-ux';
	import { LucidePawPrint } from '@lucide/svelte';
	import { licenseStore } from '$lib/store/license-store.svelte';
	import { formatDateForLicense } from '$lib/utils/format-date-for-license';
</script>

<!-- Title -->
<div class="absolute top-[8%] left-[25.5%] flex h-[2cqw]">
	<span
		class="font-['Roboto_Condensed'] text-[3.2cqw] font-bold text-black italic md:text-[1.7cqw]"
	>
		FURRY LICENSE
	</span>
</div>

<!-- Country Flag in Place of State Name -->
<div class="absolute top-[5%] left-[4%] flex aspect-4/3 items-center justify-center">
	{#if licenseStore.country.value}
		<img
			class="h-full w-[9.5cqw] rounded-md object-cover md:w-[5.5cqw]"
			src="https://flagcdn.com/{licenseStore.country.value}.svg"
			alt={licenseStore.country.label}
		/>
	{/if}
</div>

<!-- Paw Print in place of State -->
<div class="absolute top-[4%] left-[86%]">
	<Icon color="black" class="h-[5.5cqw] w-[5.5cqw] fill-black stroke-1" data={LucidePawPrint} />
</div>

<!-- Main Photo -->
<div
	class="absolute top-[25%] left-[4%] flex h-[54%] w-[26%] items-center justify-center rounded-2xl bg-gray-100"
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
<div class="absolute top-[80%] left-[4%] flex aspect-4/1 h-[10%] items-center justify-center">
	{#each licenseStore.signature as layer}
		<svg
			class="pointer-events-none absolute h-full w-full fill-black"
			viewBox="0 0 {layer.width} {layer.height}"
		>
			<path d={layer.path} />
		</svg>
	{/each}
</div>

<!-- Secondary Photo With License #, Signature, and Birthday -->
<div class="absolute top-[73%] left-[65.5%] h-[15%] w-[25%] rounded-lg bg-gray-100">
	<div class="absolute top-[3%] left-[3%] flex h-[1.5cqw] items-center">
		<span
			class="font-[Roboto] text-[1.4cqw] font-bold text-black"
			class:opacity-60={licenseStore.licenseNumber.length === 0}
		>
			{licenseStore.licenseNumber.length > 0
				? licenseStore.licenseNumber.toUpperCase()
				: 'AB123456'}
		</span>
	</div>
	<div class="absolute top-[39%] left-[15%] flex aspect-4/1 h-1/4 items-center justify-center">
		{#each licenseStore.signature as layer}
			<svg
				class="pointer-events-none absolute h-full w-full fill-black"
				viewBox="0 0 {layer.width} {layer.height}"
			>
				<path d={layer.path} />
			</svg>
		{/each}
	</div>
	<div class="absolute top-[64%] left-[3%] flex h-[1.5cqw] items-center">
		<span
			class="font-[Roboto] text-[1.4cqw] text-black"
			class:opacity-60={licenseStore.birthday === null}
		>
			{licenseStore.birthday !== null ? formatDateForLicense(licenseStore.birthday) : '01/01/2000'}
		</span>
	</div>
</div>
<div
	class="absolute top-[70.5%] left-[82.5%] flex aspect-square h-[20%] items-center justify-center rounded-full bg-gray-100"
>
	{#if licenseStore.mainPhoto}
		<img
			src={licenseStore.mainPhoto}
			alt="Secondary Headshot"
			class="aspect-square h-[70%] rounded-full object-scale-down"
		/>
	{/if}
</div>
