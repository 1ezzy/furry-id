export class LicenseStore {
	licenseNumber = $state('');
	firstName = $state('');
	secondName = $state('');
	birthday = $state<Date | null>(null);
	species = $state('');
	country = $state({
		label: '',
		value: '',
		icon: ''
	});
	gender = $state('');
	height = $state('');
	eyes = $state('');
	mainPhoto = $state('');
}

export const licenseStore = new LicenseStore();
