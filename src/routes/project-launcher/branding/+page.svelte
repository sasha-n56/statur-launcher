<script lang="ts">
	import LauncherHeader from '$lib/components/LauncherHeader.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';
	import { t } from '$lib/i18n';
</script>

<section class="flex w-full h-full items-center justify-center max-w-md">
	<div class="flex flex-col items-center">
		<div>{$t('common.projectLauncher')}</div>
		<div>{$t('launcher.brandingStep.title')}</div>
		<div>{$t('launcher.brandingStep.description')}</div>
		<LinkButton href="/project-launcher/create-account" name={$t('common.next')} />
	</div>
</section>
