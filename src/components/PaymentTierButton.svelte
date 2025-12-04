<script lang="ts">
	import type { ITier } from '$types/launcher';
	import { t } from 'svelte-i18n';

	interface ITierProps {
		tier: ITier;
		selectedTier: ITier | null;
		onClick: (tier: ITier) => void;
	}

	const { tier, selectedTier, onClick }: ITierProps = $props();
	const { id, amount, ada, apiCalls } = tier;
</script>

<button
	class={`flex w-full flex-col items-center justify-between gap-y-1.5 rounded-xl border bg-base/5 p-3 ${selectedTier?.id === id ? 'border-main-accent' : 'border-transparent'}`}
	onclick={() => onClick(tier)}
>
	<div class="flex w-full items-center justify-between">
		<div class="flex">
			<p class="mr-[3px] text-[22px]/[28px] font-jakarta font-bold text-base">
				{$t('launcher.paymentPlanStep.pricePerMonth', { values: { count: amount } })}
			</p>
			<p class="self-end text-grey-dark text-[14px]/[24px]">
				{$t('launcher.paymentPlanStep.perMonth')}
			</p>
		</div>
		<p class="text-xs text-main-accent-light">
			{$t('launcher.paymentPlanStep.ada', { values: { count: ada } })}
		</p>
	</div>
	<hr class="w-full border-base/5" />
	<div class="flex w-full items-center justify-between">
		<p class="text-xs text-base">{$t('launcher.paymentPlanStep.apiCalls')}</p>
		<p class="text-xs text-grey-dark">
			{$t('launcher.paymentPlanStep.perDay', { values: { count: apiCalls } })}
		</p>
	</div>
</button>
