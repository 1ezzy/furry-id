import type { LicenseStore } from '$lib/store/license-store.svelte';
import type { BasisKey } from '$lib/constants/basis-classes';

export interface InputField {
	key: keyof LicenseStore;
	label: string;
	basis: BasisKey;
	maxlength?: number;
	mask?: string;
	replace?: string;
	placeholder?: string;
}
