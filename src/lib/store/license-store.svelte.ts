export class LicenseStore {
	licenseNumber = $state<string>('');
	firstName = $state<string>('');
	secondName = $state<string>('');
	birthday = $state<Date | null>(null);
	species = $state<string>('');
	country = $state({
		label: '',
		value: '',
		icon: ''
	});
	gender = $state<string>('');
	height = $state<string>('');
	eyes = $state<string>('');
	mainPhoto = $state<string>('');
	signature: { path: string; width: number; height: number }[] = $state([]);
}

export const licenseStore = new LicenseStore();
