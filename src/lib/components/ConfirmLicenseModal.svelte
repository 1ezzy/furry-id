<script lang="ts">
	import { Dialog, Button, Tooltip } from 'svelte-ux';
	import ConfirmLicenseModalBody from './ConfirmLicenseModalBody.svelte';

	let { open = $bindable(), isFormValid, onconfirm } = $props();
</script>

<Dialog bind:open class="max-h-[90vh] max-w-[90vw]">
	<div class="text-primary mb-2 text-6xl" slot="title">Confirm License Details</div>
	<ConfirmLicenseModalBody />
	<div slot="actions" class="flex w-full items-center gap-2 px-2">
		<div class="flex-1">
			{#if !isFormValid}
				<span class="text-danger text-xl font-bold">You have incomplete fields!</span>
			{:else}
				<span class="text-success text-xl font-bold">All fields have been completed!</span>
			{/if}
		</div>
		<Button variant="fill" color="danger" onclick={() => (open = false)}>Cancel</Button>
		<Tooltip
			title={!isFormValid ? 'You must complete all fields to generate a license.' : ''}
			placement="top"
			offset={4}
		>
			<div>
				<Button
					type="button"
					variant="fill"
					color="success"
					onclick={(event: MouseEvent) => {
						event.preventDefault();
						onconfirm(event);
					}}
					disabled={!isFormValid}
				>
					Confirm
				</Button>
			</div>
		</Tooltip>
	</div>
</Dialog>
