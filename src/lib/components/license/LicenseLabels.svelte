<script lang="ts">
	import { licenseStore } from '$lib/store/license-store.svelte';
	import { formatDateForLicense } from '$lib/utils/format-date-for-license';
	import { SvelteDate } from 'svelte/reactivity';

	const currentDate = new Date();
	const expirationDate = new SvelteDate();
	expirationDate.setFullYear(expirationDate.getFullYear() + 5);

	const licenseNameClass = 'font-[Roboto] text-[3.2cqw] font-bold text-black';
	const labelsClass = 'font-[Roboto] text-[2.7cqw] text-black';
	const birthdayLabelClass = 'font-[Roboto] text-[3cqw] text-black';
</script>

<!-- License Number -->
<div class="absolute top-[17%] left-[40%] flex h-fit items-center">
	<span class={licenseNameClass} class:opacity-60={licenseStore.licenseNumber?.length === 0}>
		{licenseStore.licenseNumber?.length > 0 ? licenseStore.licenseNumber.toUpperCase() : 'AB123456'}
	</span>
</div>

<!-- Names -->
<div class="absolute top-[25%] left-[37.5%] flex h-fit items-center">
	<span class={labelsClass} class:opacity-60={licenseStore.secondName?.length === 0}>
		{licenseStore.secondName?.length > 0 ? licenseStore.secondName.toUpperCase() : 'SECOND NAME'}
	</span>
</div>
<div class="absolute top-[30%] left-[37.5%] flex h-fit items-center">
	<span class={labelsClass} class:opacity-60={licenseStore.firstName?.length === 0}>
		{licenseStore.firstName?.length > 0 ? licenseStore.firstName.toUpperCase() : 'FIRST NAME'}
	</span>
</div>

<!-- Species and Country -->
<div class="absolute top-[35.5%] left-[37.5%] flex h-fit items-center">
	<span class={labelsClass} class:opacity-60={licenseStore.species?.length === 0}>
		{licenseStore.species?.length > 0 ? licenseStore.species.toUpperCase() : 'SPECIES'}
	</span>
</div>
<div class="absolute top-[41%] left-[37.5%] flex h-fit items-center">
	<span class={labelsClass} class:opacity-60={licenseStore.country?.label?.length === 0}>
		{licenseStore.country?.label?.length > 0 ? licenseStore.country.label.toUpperCase() : 'COUNTRY'}
	</span>
</div>

<!-- Class, Exp Date, and End -->
<div class="absolute top-[49%] left-[35%] flex h-fit items-center">
	<span class={labelsClass}>D</span>
</div>
<div class="absolute top-[49%] left-[41.5%] flex h-fit items-center">
	<span class={labelsClass}>
		{formatDateForLicense(expirationDate)}
	</span>
</div>

<!-- Sex, Height, and Eyes -->
<div class="absolute top-[71%] left-[35%] flex h-fit items-center">
	<span class={labelsClass} class:opacity-60={licenseStore.gender?.length === 0}>
		{licenseStore.gender?.length > 0 ? licenseStore.gender.toUpperCase() : 'NB'}
	</span>
</div>
<div class="absolute top-[71%] left-[41.5%] flex h-fit items-center">
	<span class={labelsClass} class:opacity-60={licenseStore.height?.length === 0}>
		{licenseStore.height?.length > 0 ? licenseStore.height.toUpperCase() : '6-00'}
	</span>
</div>
<div class="absolute top-[71%] left-[49.5%] flex h-fit items-center">
	<span class={labelsClass} class:opacity-60={licenseStore.eyes?.length === 0}>
		{licenseStore.eyes?.length > 0 ? licenseStore.eyes.toUpperCase() : 'GRN'}
	</span>
</div>

<!-- Issue Date -->
<div class="absolute top-[77%] left-[41%] flex h-fit items-center">
	<span class={labelsClass}>
		{formatDateForLicense(currentDate)}
	</span>
</div>

<!-- Date of Birth -->
<div class="absolute top-[90%] left-[11.5%] flex h-fit items-center">
	<span class={birthdayLabelClass} class:opacity-60={licenseStore.birthday === null}>
		{licenseStore.birthday !== null ? formatDateForLicense(licenseStore.birthday) : '01/01/2000'}
	</span>
</div>
