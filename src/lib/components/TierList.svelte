<script lang="ts">
	import { t } from 'svelte-i18n';
	import Button from './Button.svelte';
	import PaymentTierButton from './PaymentTierButton.svelte';
	import type { ITier } from '$lib/types/launcher';

	const tierList: ITier[] = [
		{ id: '1', amount: '0', ada: '0', apiCalls: '100' },
		{ id: '2', amount: '10', ada: '20', apiCalls: '1,000' },
		{ id: '3', amount: '50', ada: '100', apiCalls: '5,000' },
		{ id: '4', amount: '100', ada: '200', apiCalls: '10,000' }
	];

	let selectedTier: ITier | null = $state(null);

	const selectTier = (tier: ITier) => {
		selectedTier = tier;
	};

	const savePlan = () => {
		console.log(selectedTier);
	};
</script>

<div class="flex w-full flex-col gap-y-8">
	<div class="grid w-full grid-cols-2 gap-3">
		{#each tierList as tier}
			<PaymentTierButton {tier} {selectedTier} onClick={selectTier} />
		{/each}
	</div>
	<Button onClick={savePlan} isDisabled={!selectedTier}>
		{$t('launcher.paymentPlanStep.actionButton')}
	</Button>
</div>
