import { BackgroundType } from '$lib/constants/background-type.enum';
import { type LinearGradientKey } from '$lib/constants/linear-gradient-classes';
import { generateRandomHex } from '$lib/utils/generate-random-hex';

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
	backgroundType = $state<BackgroundType>(BackgroundType.gradient);
	gradientDirection = $state<LinearGradientKey>('top-right');
	primaryColor = $state<string>(generateRandomHex());
	secondaryColor = $state<string>(generateRandomHex());
}

export const licenseStore = new LicenseStore();
