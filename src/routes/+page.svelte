<script lang="ts">
	import LauncherHeader from '$lib/components/LauncherHeader.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';
	import { t } from '$lib/i18n';
	let wallet = $t('launcher.walletSignInStep.eternl');
</script>

<div class="flex flex-col relative min-h-screen">
	<LauncherHeader />
	<main class="flex flex-1 items-center justify-center">
		<div class="flex flex-col items-center">
			<div>{$t('launcher.walletSignInStep.label')}</div>
			<div>{$t('launcher.walletSignInStep.title')}</div>
			<div>{$t('launcher.walletSignInStep.description')}</div>

			<LinkButton
				href="/project-launcher/payment-plan"
				name={$t('launcher.walletSignInStep.actionButton', { values: { name: wallet } })}
			/>
		</div>
	</main>
</div>
