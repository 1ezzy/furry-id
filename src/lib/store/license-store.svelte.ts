export class LicenseStore {
	licenseNumber = $state('');
	firstName = $state('');
	secondName = $state('');
	birthday = $state<Date | null>(null);
	species = $state('');
	country = $state('');
	gender = $state('');
	height = $state('');
	eyes = $state('');
}

export const licenseStore = new LicenseStore();
