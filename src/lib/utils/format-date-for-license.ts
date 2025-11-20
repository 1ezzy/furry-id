export const formatDateForLicense = (dateToFormat: Date): string => {
	const year = dateToFormat.getFullYear();
	const month = (1 + dateToFormat.getMonth()).toString().padStart(2, '0');
	const day = dateToFormat.getDate().toString().padStart(2, '0');

	return month + '/' + day + '/' + year;
};
