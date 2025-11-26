<script lang="ts">
	import { licenseStore } from '$lib/store/license-store.svelte';
	import { formatDateForLicense } from '$lib/utils/format-date-for-license';

	let { exportMode = false } = $props();

	const currentDate = new Date();
	const expirationDate = new Date();
	expirationDate.setFullYear(expirationDate.getFullYear() + 5);

	const licenseNamePreview = 'font-[Roboto] text-[3.2cqw] font-bold text-black md:text-[2cqw]';
	const licenseNameExport = 'font-[Roboto] font-bold text-black text-[80px]';

	const labelsPreview = 'font-[Roboto] text-[2.5cqw] text-black md:text-[1.5cqw]';
	const labelsExport = 'font-[Roboto] text-[58px] text-black';

	const birthdayLabelPreview = 'font-[Roboto] text-[2.5cqw] text-black md:text-[1.6cqw]';
	const birthdayLabelExport = 'font-[Roboto] text-[68px] text-black';
</script>

<!-- License Number -->
<div class="absolute top-[18.5%] left-[40%] flex h-fit items-center">
	<span
		class={exportMode ? licenseNameExport : licenseNamePreview}
		class:opacity-60={licenseStore.licenseNumber?.length === 0}
	>
		{licenseStore.licenseNumber?.length > 0 ? licenseStore.licenseNumber.toUpperCase() : 'AB123456'}
	</span>
</div>

<!-- Names -->
<div class="absolute top-[26.5%] left-[37.5%] flex h-fit items-center">
	<span
		class={exportMode ? labelsExport : labelsPreview}
		class:opacity-60={licenseStore.secondName?.length === 0}
	>
		{licenseStore.secondName?.length > 0 ? licenseStore.secondName.toUpperCase() : 'SECOND NAME'}
	</span>
</div>
<div class="absolute top-[31.5%] left-[37.5%] flex h-fit items-center">
	<span
		class={exportMode ? labelsExport : labelsPreview}
		class:opacity-60={licenseStore.firstName?.length === 0}
	>
		{licenseStore.firstName?.length > 0 ? licenseStore.firstName.toUpperCase() : 'FIRST NAME'}
	</span>
</div>

<!-- Species and Country -->
<div class="absolute top-[37.5%] left-[37.5%] flex h-fit items-center">
	<span
		class={exportMode ? labelsExport : labelsPreview}
		class:opacity-60={licenseStore.species?.length === 0}
	>
		{licenseStore.species?.length > 0 ? licenseStore.species.toUpperCase() : 'SPECIES'}
	</span>
</div>
<div class="absolute top-[42.5%] left-[37.5%] flex h-fit items-center">
	<span
		class={exportMode ? labelsExport : labelsPreview}
		class:opacity-60={licenseStore.country?.label?.length === 0}
	>
		{licenseStore.country?.label?.length > 0 ? licenseStore.country.label.toUpperCase() : 'COUNTRY'}
	</span>
</div>

<!-- Class, Exp Date, and End -->
<div class="absolute top-[52%] left-[35%] flex h-fit items-center md:top-[50.75%]">
	<span class={exportMode ? labelsExport : labelsPreview}>D</span>
</div>
<div class="absolute top-[52%] left-[41.5%] flex h-fit items-center md:top-[50.75%]">
	<span class={exportMode ? labelsExport : labelsPreview}>
		{formatDateForLicense(expirationDate)}
	</span>
</div>

<!-- Sex, Height, and Eyes -->
<div class="absolute top-[73%] left-[35%] flex h-fit items-center md:top-[72%]">
	<span
		class={exportMode ? labelsExport : labelsPreview}
		class:opacity-60={licenseStore.gender?.length === 0}
	>
		{licenseStore.gender?.length > 0 ? licenseStore.gender.toUpperCase() : 'NB'}
	</span>
</div>
<div class="absolute top-[73%] left-[41.5%] flex h-fit items-center md:top-[72%]">
	<span
		class={exportMode ? labelsExport : labelsPreview}
		class:opacity-60={licenseStore.height?.length === 0}
	>
		{licenseStore.height?.length > 0 ? licenseStore.height.toUpperCase() : '6-00'}
	</span>
</div>
<div class="absolute top-[73%] left-[49.5%] flex h-fit items-center md:top-[72%]">
	<span
		class={exportMode ? labelsExport : labelsPreview}
		class:opacity-60={licenseStore.eyes?.length === 0}
	>
		{licenseStore.eyes?.length > 0 ? licenseStore.eyes.toUpperCase() : 'GRN'}
	</span>
</div>

<!-- Issue Date -->
<div class="absolute top-[78%] left-[41%] flex h-fit items-center">
	<span class={exportMode ? labelsExport : labelsPreview}>
		{formatDateForLicense(currentDate)}
	</span>
</div>

<!-- Date of Birth -->
<div class="absolute top-[90.5%] left-[12%] flex h-fit items-center">
	<span
		class={exportMode ? birthdayLabelExport : birthdayLabelPreview}
		class:opacity-60={licenseStore.birthday === null}
	>
		{licenseStore.birthday !== null ? formatDateForLicense(licenseStore.birthday) : '01/01/2000'}
	</span>
</div>
