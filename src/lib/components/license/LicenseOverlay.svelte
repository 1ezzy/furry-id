<script>
	import LicenseIndicator from './LicenseIndicator.svelte';
	import LicenseLabels from './LicenseLabels.svelte';
	import LicenseMisc from './LicenseMisc.svelte';
</script>

<div class="from-primary to-secondary relative flex aspect-214/135 rounded-2xl bg-linear-to-tr">
	<!-- <div
		class="h-full w-full rounded-2xl bg-[url('/license.jpeg')] bg-cover bg-center opacity-30"
	></div> -->
	<LicenseLabels />
	<LicenseIndicator />
	<LicenseMisc />
</div>
