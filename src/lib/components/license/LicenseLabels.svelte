<script lang="ts">
	import { licenseStore } from '$lib/store/license-store.svelte';
	import { formatDateForLicense } from '$lib/utils/format-date-for-license';

	const currentDate = new Date();
	const expirationDate = new Date();
	expirationDate.setFullYear(expirationDate.getFullYear() + 5);
</script>

<!-- License Number -->
<div class="absolute top-[18.5%] left-[40%] flex h-fit items-center">
	<span
		class="font-[Roboto] text-[3.2cqw] font-bold text-black md:text-[2cqw]"
		class:opacity-60={licenseStore.licenseNumber?.length === 0}
	>
		{licenseStore.licenseNumber?.length > 0 ? licenseStore.licenseNumber.toUpperCase() : 'AB123456'}
	</span>
</div>

<!-- Names -->
<div class="absolute top-[26.5%] left-[37.5%] flex h-fit items-center">
	<span
		class="font-[Roboto] text-[2.5cqw] text-black md:text-[1.5cqw]"
		class:opacity-60={licenseStore.secondName?.length === 0}
	>
		{licenseStore.secondName?.length > 0 ? licenseStore.secondName.toUpperCase() : 'SECOND NAME'}
	</span>
</div>
<div class="absolute top-[31.5%] left-[37.5%] flex h-fit items-center">
	<span
		class="font-[Roboto] text-[2.5cqw] text-black md:text-[1.5cqw]"
		class:opacity-60={licenseStore.firstName?.length === 0}
	>
		{licenseStore.firstName?.length > 0 ? licenseStore.firstName.toUpperCase() : 'FIRST NAME'}
	</span>
</div>

<!-- Species and Country -->
<div class="absolute top-[37%] left-[37.5%] flex h-fit items-center">
	<span
		class="font-[Roboto] text-[2.5cqw] text-black font-stretch-condensed md:text-[1.5cqw]"
		class:opacity-60={licenseStore.species?.length === 0}
	>
		{licenseStore.species?.length > 0 ? licenseStore.species.toUpperCase() : 'SPECIES'}
	</span>
</div>
<div class="absolute top-[42%] left-[37.5%] flex h-fit items-center">
	<span
		class="font-[Roboto] text-[2.5cqw] text-black font-stretch-condensed md:text-[1.5cqw]"
		class:opacity-60={licenseStore.country?.label?.length === 0}
	>
		{licenseStore.country?.label?.length > 0 ? licenseStore.country.label.toUpperCase() : 'COUNTRY'}
	</span>
</div>

<!-- Class, Exp Date, and End -->
<div class="absolute top-[50.5%] left-[35%] flex h-fit items-center">
	<span class="font-[Roboto] text-[2.5cqw] text-black md:text-[1.5cqw]">D</span>
</div>
<div class="absolute top-[50.5%] left-[41.5%] flex h-fit items-center">
	<span class="font-[Roboto] text-[2.5cqw] text-black md:text-[1.5cqw]">
		{formatDateForLicense(expirationDate)}
	</span>
</div>

<!-- Sex, Height, and Eyes -->
<div class="absolute top-[72%] left-[35%] flex h-fit items-center">
	<span
		class="font-[Roboto] text-[2.5cqw] text-black md:text-[1.5cqw]"
		class:opacity-60={licenseStore.gender?.length === 0}
	>
		{licenseStore.gender?.length > 0 ? licenseStore.gender.toUpperCase() : 'NB'}
	</span>
</div>
<div class="absolute top-[72%] left-[41.5%] flex h-fit items-center">
	<span
		class="font-[Roboto] text-[2.5cqw] text-black md:text-[1.5cqw]"
		class:opacity-60={licenseStore.height?.length === 0}
	>
		{licenseStore.height?.length > 0 ? licenseStore.height.toUpperCase() : '6-00'}
	</span>
</div>
<div class="absolute top-[72%] left-[49.5%] flex h-fit items-center">
	<span
		class="font-[Roboto] text-[2.5cqw] text-black md:text-[1.5cqw]"
		class:opacity-60={licenseStore.eyes?.length === 0}
	>
		{licenseStore.eyes?.length > 0 ? licenseStore.eyes.toUpperCase() : 'GRN'}
	</span>
</div>

<!-- Issue Date -->
<div class="absolute top-[78%] left-[41%] flex h-fit items-center">
	<span class="font-[Roboto] text-[2.5cqw] text-black md:text-[1.5cqw]">
		{formatDateForLicense(currentDate)}
	</span>
</div>

<!-- Date of Birth -->
<div class="absolute top-[90.5%] left-[12%] flex h-fit items-center">
	<span
		class="font-[Roboto] text-[2.5cqw] text-black md:text-[1.5cqw]"
		class:opacity-60={licenseStore.birthday === null}
	>
		{licenseStore.birthday !== null ? formatDateForLicense(licenseStore.birthday) : '01/01/2000'}
	</span>
</div>
