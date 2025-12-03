<script lang="ts">
	import type { ITier } from '$types';

	interface ITierProps {
		tier: ITier;
		selectedTier: ITier | null;
		onClick: (tier: ITier) => void;
	}

	const { tier, selectedTier, onClick }: ITierProps = $props();
	const { id, price, ada, apiCalls } = tier;
</script>

<button
	class={`flex w-full flex-col items-center justify-between gap-y-1.5 rounded-xl border bg-base p-3 ${selectedTier?.id === id ? 'border-main-accent' : 'border-transparent'}`}
	onclick={() => onClick(tier)}
>
	<div class="flex w-full items-center justify-between">
		<p class="text-[22px]/[28px] font-bold text-title-light">
			${price}
		</p>
		<p class="text-xs/[15px] text-text-pink">{ada} ADA</p>
	</div>
	<hr class="w-full border-block-background" />
	<div class="flex w-full items-center justify-between">
		<p class="text-xs/[15px] text-title-light">API calls</p>
		<p class="text-xs/[15px] text-description-dark">{apiCalls}/day</p>
	</div>
</button>
