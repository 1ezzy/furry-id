<script lang="ts">
	let { children } = $props();
</script>

<div
	class="flex h-full flex-col gap-16 px-8 pt-8 pb-16 md:h-[calc(100vh-4rem)] md:items-center md:justify-center md:gap-8 md:px-0 md:pt-0 md:pb-0"
>
	<div
		class="flex h-full w-full flex-1 flex-col items-center justify-center gap-16 md:gap-8 md:p-0 md:px-8 md:pb-16 lg:pl-12 xl:w-[90vw] 2xl:gap-16 2xl:px-16 2xl:pb-20"
	>
		{@render children()}
	</div>
</div>
