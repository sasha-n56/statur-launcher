<script lang="ts">
	import { eternlIcon, flintIcon, laceIcon } from '$lib/assets';
	import { t } from 'svelte-i18n';
	import WalletButton from './WalletButton.svelte';

	let selectedWallet: string | null = $state(null);

	export const wallets = [
		{ id: 0, name: $t('launcher.walletSignInStep.eternl'), icon: eternlIcon },
		{ id: 1, name: $t('launcher.walletSignInStep.flint'), icon: flintIcon },
		{ id: 2, name: $t('launcher.walletSignInStep.lace'), icon: laceIcon }
	];

	const selectWallet = (walletName: string) => {
		selectedWallet = walletName;
	};
</script>

<div class="flex w-full flex-col items-center gap-3">
	{#each wallets as wallet}
		<WalletButton {...wallet} onClick={selectWallet} />
	{/each}
</div>
