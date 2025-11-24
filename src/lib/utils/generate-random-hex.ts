import { licenseStore } from '$lib/store/license-store.svelte';

export const generateRandomHex = (): string => {
	return (
		'#' +
		Math.floor(Math.random() * 16777215)
			.toString(16)
			.padStart(6, '0')
	);
};

export const randomizeColors = (): void => {
	licenseStore.primaryColor = generateRandomHex();
	licenseStore.secondaryColor = generateRandomHex();
};
