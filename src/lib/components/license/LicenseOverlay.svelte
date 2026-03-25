<script lang="ts">
	import { licenseStore } from '$lib/store/license-store.svelte';
	import LicenseIndicator from '$lib/components/license/LicenseIndicator.svelte';
	import LicenseLabels from '$lib/components/license/LicenseLabels.svelte';
	import LicenseMisc from '$lib/components/license/LicenseMisc.svelte';
	import { BackgroundType } from '$lib/constants/background-type.enum';

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

	let computedStyle = $derived.by(() => {
		switch (licenseStore.backgroundType) {
			case BackgroundType.gradient:
				return `background-image: linear-gradient(${gradientDirections[licenseStore.gradientDirection]}, ${licenseStore.primaryColor}, ${licenseStore.secondaryColor});`;
			case BackgroundType.solid:
				return `background-color: ${licenseStore.primaryColor}`;
			default:
				return `background-color: ${licenseStore.primaryColor}`;
		}
	});
</script>

<div
	id="license-overlay"
	class="@container relative flex aspect-856/540 h-full w-full rounded-2xl border-2 border-black bg-contain tracking-wide dark:border-white"
	style={computedStyle}
>
	<LicenseLabels />
	<LicenseIndicator />
	<LicenseMisc />
</div>
