<script lang="ts">
	import { licenseStore } from '$lib/store/license-store.svelte';
	import { formatDateForLicense } from '$lib/utils/format-date-for-license';

	const currentDate = new Date();
	const expirationDate = new Date();
	expirationDate.setFullYear(expirationDate.getFullYear() + 5);
</script>

<!-- License Number -->
<div class="absolute top-[20%] left-[40%] flex h-[1.5cqw] items-center">
	<span
		class="font-[Arial] text-[3.2cqw] font-bold text-black md:text-[1.7cqw]"
		class:opacity-60={licenseStore.licenseNumber.length === 0}
	>
		{licenseStore.licenseNumber.length > 0 ? licenseStore.licenseNumber.toUpperCase() : 'AB123456'}
	</span>
</div>

<!-- Names -->
<div class="absolute top-[27%] left-[37.5%] flex h-[1.5cqw] items-center">
	<span
		class="font-[Arial] text-[2.5cqw] text-black md:text-[1.2cqw]"
		class:opacity-60={licenseStore.secondName.length === 0}
	>
		{licenseStore.secondName.length > 0 ? licenseStore.secondName.toUpperCase() : 'SECOND NAME'}
	</span>
</div>
<div class="absolute top-[32.5%] left-[37.5%] flex h-[1.5cqw] items-center">
	<span
		class="font-[Arial] text-[2.5cqw] text-black md:text-[1.2cqw]"
		class:opacity-60={licenseStore.firstName.length === 0}
	>
		{licenseStore.firstName.length > 0 ? licenseStore.firstName.toUpperCase() : 'FIRST NAME'}
	</span>
</div>

<!-- Species and Country -->
<div class="absolute top-[38%] left-[37.5%] flex h-[1.5cqw] items-center">
	<span
		class="font-[Arial] text-[2.5cqw] text-black font-stretch-condensed md:text-[1.2cqw]"
		class:opacity-60={licenseStore.species.length === 0}
	>
		{licenseStore.species.length > 0 ? licenseStore.species.toUpperCase() : 'SPECIES'}
	</span>
</div>
<div class="absolute top-[43.5%] left-[37.5%] flex h-[1.5cqw] items-center">
	<span
		class="font-[Arial] text-[2.5cqw] text-black font-stretch-condensed md:text-[1.2cqw]"
		class:opacity-60={licenseStore.country.length === 0}
	>
		{licenseStore.country.length > 0 ? licenseStore.country.toUpperCase() : 'COUNTRY'}
	</span>
</div>

<!-- Class, Exp Date, and End -->
<div class="absolute top-[52%] left-[35%] flex h-[1.5cqw] items-center">
	<span class="font-[Arial] text-[2.5cqw] text-black md:text-[1.2cqw]">D</span>
</div>
<div class="absolute top-[52%] left-[42%] flex h-[1.5cqw] items-center">
	<span class="font-[Arial] text-[2.5cqw] text-black md:text-[1.2cqw]">
		{formatDateForLicense(expirationDate)}
	</span>
</div>

<!-- Sex, Height, and Eyes -->
<div class="absolute top-[73%] left-[35%] flex h-[1.5cqw] items-center">
	<span
		class="font-[Arial] text-[2.5cqw] text-black md:text-[1.2cqw]"
		class:opacity-60={licenseStore.gender.length === 0}
	>
		{licenseStore.gender.length > 0 ? licenseStore.gender.toUpperCase() : 'NB'}
	</span>
</div>
<div class="absolute top-[73%] left-[41.5%] flex h-[1.5cqw] items-center">
	<span
		class="font-[Arial] text-[2.5cqw] text-black md:text-[1.2cqw]"
		class:opacity-60={licenseStore.height.length === 0}
	>
		{licenseStore.height.length > 0 ? licenseStore.height.toUpperCase() : '6-00'}
	</span>
</div>
<div class="absolute top-[73%] left-[49.5%] flex h-[1.5cqw] items-center">
	<span
		class="font-[Arial] text-[2.5cqw] text-black md:text-[1.2cqw]"
		class:opacity-60={licenseStore.eyes.length === 0}
	>
		{licenseStore.eyes.length > 0 ? licenseStore.eyes.toUpperCase() : 'GRN'}
	</span>
</div>

<!-- Issue Date -->
<div class="absolute top-[79.5%] left-[42%] flex h-[1.5cqw] items-center">
	<span class="font-[Arial] text-[2.5cqw] text-black md:text-[1.2cqw]">
		{formatDateForLicense(currentDate)}
	</span>
</div>

<!-- Date of Birth -->
<div class="absolute top-[91%] left-[12%] flex h-[1.5cqw] items-center">
	<span
		class="font-[Arial] text-[3cqw] text-black md:text-[1.3cqw]"
		class:opacity-60={licenseStore.birthday === null}
	>
		{licenseStore.birthday !== null ? formatDateForLicense(licenseStore.birthday) : '01/01/2000'}
	</span>
</div>
