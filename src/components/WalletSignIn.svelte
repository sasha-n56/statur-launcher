<script lang="ts">
	import { WALLET_SIGN_IN_TEXT_DATA } from '$const';
	import LauncherText from './LauncherText.svelte';
	import LauncherWidget from './LauncherWidget.svelte';
	import WalletList from './WalletList.svelte';

	const { label, title, description } = WALLET_SIGN_IN_TEXT_DATA;
</script>

<LauncherWidget>
	{#snippet children()}
		<LauncherText {label} {title} {description} />
		<WalletList />
	{/snippet}
</LauncherWidget>
