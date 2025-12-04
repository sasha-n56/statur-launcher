<script lang="ts">
	import { t } from '$lib/i18n';
	let wallet = $t('launcher.walletSignInStep.eternl');
</script>

<div class="flex flex-col w-full items-center">
	<header>
		{$t('common.statur')}
		{$t('common.projectLauncher')}
	</header>
	<main class="flex w-full h-full items-center justify-center max-w-md">
		<div class="flex flex-col items-center">
			<div class="">{$t('launcher.walletSignInStep.label')}</div>
			<div>{$t('launcher.walletSignInStep.title')}</div>
			<div>{$t('launcher.paymentPlanStep.description')}</div>
			<button class="w-40 border">
				<a href="/project-launcher/payment-plan" class=""
					>{$t('launcher.walletSignInStep.actionButton', { values: { name: wallet } })}</a
				>
			</button>
		</div>
	</main>
</div>
