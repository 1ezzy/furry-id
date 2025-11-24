<script lang="ts">
	import { licenseStore } from '$lib/store/license-store.svelte';
	import LicenseIndicator from '$lib/components/license/LicenseIndicator.svelte';
	import LicenseLabels from '$lib/components/license/LicenseLabels.svelte';
	import LicenseMisc from '$lib/components/license/LicenseMisc.svelte';
	import { linearGradientClasses } from '$lib/constants/linear-gradient-classes';

	const gradientDirections: Record<string, string> = {
		top: 'to top',
		bottom: 'to bottom',
		right: 'to right',
		left: 'to left',
		'top-right': 'to top right',
		'top-left': 'to top left',
		'bottom-right': 'to bottom right',
		'bottom-left': 'to bottom left'
	};

	let gradientStyle = $derived(
		`background-image: linear-gradient(${gradientDirections[licenseStore.gradientDirection]}, ${licenseStore.primaryColor}, ${licenseStore.secondaryColor});`
	);
</script>

<div
	class="relative flex aspect-214/135 max-h-[80vw] rounded-2xl border-2 border-black bg-auto dark:border-white"
	style={gradientStyle}
>
	<!-- <div
		class="h-full w-full rounded-2xl bg-[url('/license.jpeg')] bg-cover bg-center opacity-30"
	></div> -->
	<LicenseLabels />
	<LicenseIndicator />
	<LicenseMisc />
</div>
