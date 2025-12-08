<script lang="ts">
	import LauncherHeader from '$lib/components/LauncherHeader.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';
	import { t } from '$lib/i18n';
	let wallet = $t('launcher.walletSignInStep.eternl');
</script>

<div class="flex flex-col w-full items-center">
	<LauncherHeader />
	<main class="flex w-full h-full items-center justify-center max-w-md">
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
