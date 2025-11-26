<script lang="ts">
	let { exportMode = false } = $props();

	const indicatorPreview = "font-['Roboto_Condensed'] text-[1.5cqw] text-blue-900 md:text-[0.8cqw]";
	const indicatorExport = "font-['Roboto_Condensed'] text-blue-900 text-4xl";
</script>

<!-- License Number Indicator -->
<div class="absolute top-[22%] left-[35%] flex h-fit items-center">
	<span class={exportMode ? indicatorExport : indicatorPreview}>1 NO</span>
</div>

<!-- Name Indicator -->
<div class="absolute top-[28%] left-[35%] flex h-fit items-center">
	<span class={exportMode ? indicatorExport : indicatorPreview}>2,3</span>
</div>

<!-- Species and Country Indicators -->
<div class="absolute top-[39%] left-[35%] flex h-fit items-center">
	<span class={exportMode ? indicatorExport : indicatorPreview}>5</span>
</div>
<div class="absolute top-[44%] left-[35%] flex h-fit items-center">
	<span class={exportMode ? indicatorExport : indicatorPreview}>6</span>
</div>

<!-- Class, Date, and End -->
<div class="absolute top-[49%] left-[35%] flex h-fit items-center">
	<span class={exportMode ? indicatorExport : indicatorPreview}>7 CLASS</span>
</div>
<div class="absolute top-[49%] left-[42%] flex h-fit items-center">
	<span class={exportMode ? indicatorExport : indicatorPreview}>8 EXP</span>
</div>

<!-- Sex, Height, and Eyes -->
<div class="absolute top-[70%] left-[35%] flex h-fit items-center">
	<span class={exportMode ? indicatorExport : indicatorPreview}>9 SEX</span>
</div>
<div class="absolute top-[70%] left-[41.5%] flex h-fit items-center">
	<span class={exportMode ? indicatorExport : indicatorPreview}>10 HGT</span>
</div>
<div class="absolute top-[70%] left-[49.5%] flex h-fit items-center">
	<span class={exportMode ? indicatorExport : indicatorPreview}>11 EYES</span>
</div>

<!-- Issue Date -->
<div class="absolute top-[80%] left-[35%] flex h-fit items-center">
	<span class={exportMode ? indicatorExport : indicatorPreview}>12 ISS</span>
</div>

<!-- Date of Birth-->
<div class="absolute top-[92.75%] left-[7%] flex h-fit items-center">
	<span class={exportMode ? indicatorExport : indicatorPreview}>4 DOB</span>
</div>
