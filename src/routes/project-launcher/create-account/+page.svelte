<script lang="ts">
	import LinkButton from '$lib/components/LinkButton.svelte';
	import { t } from '$lib/i18n';
</script>

<section class="flex w-full h-full items-center justify-center max-w-md">
	<div class="flex flex-col items-center">
		<div>{$t('launcher.createAccountStep.label')}</div>
		<div>{$t('launcher.createAccountStep.title')}</div>
		<div>{$t('launcher.createAccountStep.description')}</div>
		<div>{$t('launcher.createAccountStep.accountName')}</div>
		<LinkButton href="/project-launcher/create-account-success" name={$t('common.create')} />
	</div>
</section>
