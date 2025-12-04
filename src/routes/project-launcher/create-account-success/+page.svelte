<script lang="ts">
	import LauncherHeader from '$components/LauncherHeader.svelte';
	import LinkButton from '$components/LinkButton.svelte';
	import { t } from '$lib/i18n';
</script>

<div class="flex flex-col w-full items-center">
	<LauncherHeader />
	<main class="flex w-full h-full items-center justify-center max-w-md">
		<div class="flex flex-col items-center">
			<div>{$t('launcher.createAccountSuccessStep.label')}</div>
			<div>{'Gotham City'}</div>
			<div>{$t('launcher.createAccountSuccessStep.description')}</div>
			<LinkButton href="/administration/metric-fields" name={$t('common.join')} />
		</div>
	</main>
</div>
