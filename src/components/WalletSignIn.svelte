<script lang="ts">
	import { t } from 'svelte-i18n';
	import LauncherText from './LauncherText.svelte';
	import LauncherWidget from './LauncherWidget.svelte';
	import WalletList from './WalletList.svelte';

	export const walletSignInTextData = {
		label: $t('launcher.walletSignInStep.label'),
		title: $t('launcher.walletSignInStep.title'),
		description: $t('launcher.walletSignInStep.description')
	};
	const { label, title, description } = walletSignInTextData;
</script>

<LauncherWidget>
	{#snippet children()}
		<LauncherText {label} {title} {description} />
		<WalletList />
	{/snippet}
</LauncherWidget>
