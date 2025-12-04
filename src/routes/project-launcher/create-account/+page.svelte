<script lang="ts">
	import LauncherHeader from '$components/LauncherHeader.svelte';
	import LinkButton from '$components/LinkButton.svelte';
	import { t } from '$lib/i18n';
</script>

<div class="flex flex-col w-full items-center">
	<LauncherHeader />
	<main class="flex w-full h-full items-center justify-center max-w-md">
		<div class="flex flex-col items-center">
			<div>{$t('launcher.createAccountStep.label')}</div>
			<div>{$t('launcher.createAccountStep.title')}</div>
			<div>{$t('launcher.createAccountStep.description')}</div>
			<LinkButton href="/project-launcher/create-account-success" name={$t('common.create')} />
		</div>
	</main>
</div>
