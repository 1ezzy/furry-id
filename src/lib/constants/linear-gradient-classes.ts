export const linearGradientClasses = {
	top: 'bg-linear-to-t',
	bottom: 'bg-linear-to-b',
	right: 'bg-linear-to-r',
	left: 'bg-linear-to-l',
	'top-right': 'bg-linear-to-tr',
	'top-left': 'bg-linear-to-tl',
	'bottom-right': 'bg-linear-to-br',
	'bottom-left': 'bg-linear-to-bl'
};
export type LinearGradientKey = keyof typeof linearGradientClasses;
