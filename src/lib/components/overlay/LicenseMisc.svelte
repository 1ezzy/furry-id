<script>
	import { Icon } from 'svelte-ux';
	import { LucidePawPrint } from '@lucide/svelte';
</script>

<!-- Title -->
<div class="absolute top-[8%] left-[25.5%] flex h-[2cqw]">
	<span class="font-['Arial_Narrow'] text-[3.2cqw] text-black italic md:text-[1.7cqw]">
		FURRY LICENSE
	</span>
</div>

<!-- Paw Print in place of State -->
<div class="absolute top-[4%] left-[85%]">
	<Icon color="black" class="h-[5cqw] w-[5cqw] stroke-1" data={LucidePawPrint} />
</div>

<!-- Main Photo -->
<div
	class="absolute top-[25%] left-[4%] flex h-[54%] w-[26%] items-center justify-center rounded-2xl bg-gray-100"
>
	<img src="/src/lib/assets/headshot.png" alt="Main Headshot" />
</div>

<!-- Secondary Photo With License # and Birthday -->
<div class="absolute top-[73%] left-[65.5%] h-[15%] w-[25%] rounded-lg bg-gray-100">
	<div class="absolute top-[2%] left-[8%] flex h-[1.5cqw] items-center">
		<span class="font-[Arial] text-[1.1cqw] font-bold text-black">NG133767</span>
	</div>
	<div class="absolute top-[60%] left-[8%] flex h-[1.5cqw] items-center">
		<span class="font-[Arial] text-[1.1cqw] text-black">03-04-2000</span>
	</div>
</div>
<div
	class="absolute top-[70.5%] left-[82.5%] flex aspect-square h-[20%] items-center justify-center rounded-full bg-gray-100"
>
	<img class="aspect-square h-[70%]" src="/src/lib/assets/headshot.png" alt="Main Headshot" />
</div>
