<script lang="ts">
	let { children } = $props();
</script>

<div class="hidden h-[calc(100vh-4rem)] items-center justify-center overflow-hidden lg:flex">
	<div
		class="flex h-full w-full flex-col items-center justify-start gap-8 pt-4 pr-8 pb-16 pl-12 xl:w-[90vw] 2xl:gap-16 2xl:px-16 2xl:pb-20"
	>
		{@render children()}
	</div>
</div>
<div class="hidden h-[calc(100vh-4rem)] items-center justify-center md:flex lg:hidden">
	<div class="flex h-full w-full flex-col items-center justify-center gap-8 pt-4 pr-8 pb-16 pl-12">
		{@render children()}
	</div>
</div>
<div class="block h-full md:hidden">
	<div class="flex w-full flex-1 flex-col gap-16 px-8 pt-8 pb-16">
		{@render children()}
	</div>
</div>
