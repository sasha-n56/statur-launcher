<script lang="ts">
	import LinkButton from '$components/LinkButton.svelte';
	import SignUpHeader from '$components/SignUpHeader.svelte';
	import { t } from '$lib/i18n';
</script>

<div class="flex flex-col w-full items-center">
	<SignUpHeader />
	<main class="flex w-full h-full items-center justify-center max-w-md">
		<div class="flex flex-col items-center">
			<div>{$t('common.welcome')}</div>
			<div>{$t('launcher.createAccountStep.title')}</div>
			<div>{$t('launcher.createAccountStep.description')}</div>
			<LinkButton href="/sign-up/create-account-success" name={$t('common.create')} />
		</div>
	</main>
</div>
