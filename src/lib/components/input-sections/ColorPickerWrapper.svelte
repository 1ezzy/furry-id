<script lang="ts">
	import { Popover } from 'svelte-ux';

	let { wrapper = $bindable(), isOpen, isDialog, children } = $props();

	const preventScroll = (e: TouchEvent) => {
		e.preventDefault();
	};
</script>

<Popover bind:open={isOpen}>
	<div
		bind:this={wrapper}
		class="bg-surface-100 rounded-sm border border-black p-2 dark:border-white"
		ontouchstart={preventScroll}
		ontouchmove={preventScroll}
		ontouchend={preventScroll}
	>
		{@render children()}
	</div>
</Popover>
