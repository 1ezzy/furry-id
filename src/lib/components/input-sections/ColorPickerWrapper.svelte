<script lang="ts">
	import { Popover } from 'svelte-ux';

	let { wrapper = $bindable(), isOpen, isDialog, children } = $props();
</script>

<Popover bind:open={isOpen}>
	<div
		bind:this={wrapper}
		class="bg-surface-100 rounded-sm border border-black p-2 dark:border-white"
	>
		{@render children()}
	</div>
</Popover>
