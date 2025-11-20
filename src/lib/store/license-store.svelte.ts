export class LicenseStore {
	licenseNumber = $state('');
	firstName = $state('');
	secondName = $state('');
	birthday = $state<Date | null>(null);
	species = $state('');
}

export const licenseStore = new LicenseStore();
