<script lang="ts">
	import LauncherHeader from '$components/LauncherHeader.svelte';
	import LinkButton from '$components/LinkButton.svelte';
	import { t } from '$lib/i18n';
</script>

<div class="flex flex-col w-full items-center">
	<LauncherHeader />
	<main class="flex w-full h-full items-center justify-center max-w-md">
		<div class="flex flex-col items-center">
			<div>{$t('common.projectLauncher')}</div>
			<div>{$t('launcher.brandingStep.title')}</div>
			<div>{$t('launcher.brandingStep.description')}</div>
			<LinkButton href="/project-launcher/create-account" name={$t('common.next')} />
		</div>
	</main>
</div>
