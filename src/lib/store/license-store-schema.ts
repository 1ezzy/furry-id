import { z } from 'zod';

export const licenseSchema = z.object({
	firstName: z
		.string()
		.min(1, 'First name is required')
		.max(24, 'First name must be 24 characters or less')
		.regex(
			/^[a-zA-Z\s'-]+$/,
			'First name can only contain letters, spaces, hyphens, and apostrophes'
		),
	secondName: z
		.string()
		.min(1, 'Second name is required')
		.max(24, 'Second name must be 24 characters or less')
		.regex(
			/^[a-zA-Z\s'-]+$/,
			'Second name can only contain letters, spaces, hyphens, and apostrophes'
		),
	birthday: z
		.date({
			message: 'Birthday is required'
		})
		.refine((date: Date) => {
			const age = new Date().getFullYear() - date.getFullYear();
			return age >= 0 && age <= 150;
		}, 'Please enter a valid birthday'),
	species: z
		.string()
		.min(1, 'Species is required')
		.max(16, 'Species must be 16 characters or less')
		.regex(/^[a-zA-Z\s-]+$/, 'Species can only contain letters, spaces, and hyphens'),
	country: z.object({
		label: z.string().min(1, 'Country is required'),
		value: z.string(),
		icon: z.string()
	}),
	licenseNumber: z
		.string()
		.min(1, 'License number is required')
		.max(8, 'License number must be 8 characters or less')
		.regex(/^[A-Z0-9]+$/, 'License number can only contain uppercase letters and numbers'),
	gender: z.string().min(1, 'Gender is required').max(3, 'Gender must be 3 characters or less'),
	height: z
		.string()
		.regex(/^\d-\d{2}$/, 'Height must be in format X-XX (e.g., 6-00)')
		.refine((val: string) => {
			const [feet, inches] = val.split('-').map(Number);
			return feet >= 0 && feet <= 9 && inches >= 0 && inches <= 11;
		}, 'Height must be valid (feet: 0-9, inches: 0-11)'),
	eyes: z
		.string()
		.min(1, 'Eye color is required')
		.max(3, 'Eye color must be 3 characters or less')
		.regex(/^[A-Z]{3}$/, 'Eye color must be 3 uppercase letters (e.g., BLU, BRN, GRN)')
});

export type LicenseFormData = z.infer<typeof licenseSchema>;
