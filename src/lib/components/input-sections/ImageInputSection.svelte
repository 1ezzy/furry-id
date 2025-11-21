<script lang="ts">
	import Cropper, { type OnCropCompleteEvent, type CropArea } from 'svelte-easy-crop';
	import { Button, Field } from 'svelte-ux';
	import { licenseStore } from '$lib/store/license-store.svelte';
	import { LucideX } from '@lucide/svelte';

	let crop = $state({ x: 0, y: 0 });
	let zoom = $state<number>(1);
	let croppedAreaPixels = $state<CropArea | undefined>();
	let originalImage = $state<string>('');

	let fileInput: HTMLInputElement;

	const handleFileUpload = (event: Event) => {
		const input = event.target as HTMLInputElement;
		const file = input.files?.[0];

		if (file && file.type.startsWith('image/')) {
			const reader = new FileReader();
			reader.onload = (e) => {
				licenseStore.mainPhoto = e.target?.result as string;
				originalImage = e.target?.result as string;
			};
			reader.readAsDataURL(file);
		}
	};

	const clearSelectedImage = () => {
		licenseStore.mainPhoto = '';
		originalImage = '';

		if (fileInput) {
			fileInput.value = '';
		}
	};

	const handleCropComplete = (event: OnCropCompleteEvent) => {
		croppedAreaPixels = event.pixels;
	};

	const cropImage = async () => {
		if (!licenseStore.mainPhoto || !croppedAreaPixels) return;

		const image = new Image();
		image.src = licenseStore.mainPhoto;

		await new Promise((resolve) => {
			image.onload = resolve;
		});

		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');

		if (!ctx) return;

		canvas.width = croppedAreaPixels.width;
		canvas.height = croppedAreaPixels.height;

		ctx.drawImage(
			image,
			croppedAreaPixels.x,
			croppedAreaPixels.y,
			croppedAreaPixels.width,
			croppedAreaPixels.height,
			0,
			0,
			croppedAreaPixels.width,
			croppedAreaPixels.height
		);

		licenseStore.mainPhoto = canvas.toDataURL('image/svg');
	};

	const resetCroppedImage = () => {
		licenseStore.mainPhoto = originalImage;
	};
</script>

<div class="flex flex-1 flex-col gap-8 2xl:gap-8">
	<div class="flex items-center gap-4">
		<Field class="min-w-0 flex-1 overflow-hidden">
			<input
				bind:this={fileInput}
				class="file:bg-secondary w-full file:mr-4 file:rounded-2xl file:px-4"
				type="file"
				accept="image/*"
				onchange={handleFileUpload}
			/>
		</Field>
		{#if licenseStore.mainPhoto}
			<Button
				class="icon aspect-square h-8 w-8 shrink-0"
				icon={LucideX}
				color="danger"
				variant="fill"
				onclick={clearSelectedImage}
			/>
		{/if}
	</div>
	{#if licenseStore.mainPhoto}
		<div
			class="relative h-full min-h-32 w-full rounded-sm border border-black md:h-[70%] dark:border-white"
		>
			<Cropper
				bind:crop
				bind:zoom
				image={licenseStore.mainPhoto}
				aspect={1 / 1}
				oncropcomplete={(event: OnCropCompleteEvent) => {
					handleCropComplete(event);
				}}
			/>
		</div>
		<div class="flex gap-4">
			<Button class="flex-1" color="success" variant="fill" onclick={cropImage}>Apply Crop</Button>
			<Button class="flex-1" color="danger" variant="fill" onclick={resetCroppedImage}>
				Reset Image
			</Button>
		</div>
	{/if}
</div>
