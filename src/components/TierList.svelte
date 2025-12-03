<script lang="ts">
	import Button from './Button.svelte';
	import PaymentTierButton from './PaymentTierButton.svelte';

	const TIER_LIST = [
		{ id: '1', price: '0', ada: '0', apiCalls: '100' },
		{ id: '2', price: '10', ada: '20', apiCalls: '1000' },
		{ id: '3', price: '50', ada: '100', apiCalls: '5000' },
		{ id: '4', price: '100', ada: '200', apiCalls: '10000' }
	];

	interface ITier {
		id: string;
		price: string;
		ada: string;
		apiCalls: string;
	}

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
		{#each TIER_LIST as tier}
			<PaymentTierButton {tier} {selectedTier} onClick={selectTier} />
		{/each}
	</div>
	<Button onClick={savePlan} isDisabled={!selectedTier}>Pay & Proceed</Button>
</div>
