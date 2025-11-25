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
		value: ''
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
	generatedLicenseImage = $state<string>('');

	get isValid() {
		return (
			this.licenseNumber.length > 0 &&
			this.firstName.length > 0 &&
			this.secondName.length > 0 &&
			this.birthday !== null &&
			this.species.length > 0 &&
			this.country.label.length > 0 &&
			this.gender.length > 0 &&
			this.height.length > 0 &&
			this.eyes.length > 0 &&
			this.mainPhoto.length > 0 &&
			this.signature.length > 0
		);
	}
}

export const licenseStore = new LicenseStore();
