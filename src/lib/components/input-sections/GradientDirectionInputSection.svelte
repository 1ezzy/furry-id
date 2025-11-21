<script lang="ts">
	import { MenuField, type MenuOption } from 'svelte-ux';

	let selectedGradientType = $state<number>(1);
	let gradientOptions: MenuOption[] = [
		{ label: 'Top', value: 1 },
		{ label: 'Bottom', value: 2 },
		{ label: 'Right', value: 3 },
		{ label: 'Left', value: 4 },
		{ label: 'Top Right', value: 5 },
		{ label: 'Top Left', value: 6 },
		{ label: 'Bottom Right', value: 7 },
		{ label: 'Bottom Left', value: 8 }
	];
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
