<script lang="ts">
	import LinkButton from '$components/LinkButton.svelte';
	import SignUpHeader from '$components/SignUpHeader.svelte';
	import { t } from '$lib/i18n';
	let wallet = $t('launcher.walletSignInStep.eternl');
</script>

<div class="flex flex-col w-full items-center">
	<SignUpHeader />
	<main class="flex w-full h-full items-center justify-center max-w-md">
		<div class="flex flex-col items-center">
			<div>{$t('launcher.walletSignInStep.label')}</div>
			<div>{$t('launcher.walletSignInStep.title')}</div>
			<div>{$t('launcher.walletSignInStep.description')}</div>

			<LinkButton
				href="/sign-up/create-account"
				name={$t('launcher.walletSignInStep.actionButton', { values: { name: wallet } })}
			/>
		</div>
	</main>
</div>
