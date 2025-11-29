<script lang="ts">
	import { WALLETS } from '../const';
	import WalletButton from './WalletButton.svelte';

	let selectedWallet: string | null = $state(null);

	const selectWallet = (walletName: string) => {
		selectedWallet = walletName;
	};
</script>

<div class="flex w-full flex-col items-center gap-3">
	{#each WALLETS as wallet}
		<WalletButton {...wallet} onClick={selectWallet} />
	{/each}
</div>
