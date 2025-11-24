<script lang="ts">
	import { MenuField, type MenuOption } from 'svelte-ux';
	import type { LinearGradientKey } from '$lib/constants/linear-gradient-classes';
	import { licenseStore } from '$lib/store/license-store.svelte';

	let selectedGradientType = $state<LinearGradientKey>('top-right');
	let gradientOptions: MenuOption[] = [
		{ label: 'Top', value: 'top' },
		{ label: 'Bottom', value: 'bottom' },
		{ label: 'Right', value: 'right' },
		{ label: 'Left', value: 'left' },
		{ label: 'Top Right', value: 'top-right' },
		{ label: 'Top Left', value: 'top-left' },
		{ label: 'Bottom Right', value: 'bottom-right' },
		{ label: 'Bottom Left', value: 'bottom-left' }
	];
	$effect(() => {
		licenseStore.gradientDirection = selectedGradientType;
	});
</script>

<div class="flex flex-col gap-2">
	<h3 class="text-primary text-2xl">Gradient Direction</h3>
	<div class="flex-1">
		<MenuField
			label="Direction, From Primary to Seconday"
			options={gradientOptions}
			bind:value={selectedGradientType}
		/>
	</div>
</div>
