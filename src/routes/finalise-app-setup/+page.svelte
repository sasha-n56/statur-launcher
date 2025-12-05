<script lang="ts">
	import AdminHeader from '$components/AdminHeader.svelte';
	import LinkButton from '$components/LinkButton.svelte';
	import { t } from '$lib/i18n';
</script>

<div class="flex flex-col w-full items-center">
	<AdminHeader />
	<main class="flex w-full h-full items-center justify-center max-w-md">
		<div class="flex flex-col items-center">
			<div>{$t('finaliseSetup.label')}</div>
			<div>{$t('finaliseSetup.title')}</div>
			<div>{$t('finaliseSetup.description.prefix')}{$t('finaliseSetup.description.mandatory')}</div>

			<LinkButton href="/project-launcher/payment-plan" name={$t('finaliseSetup.actionButton')} />
		</div>
	</main>
</div>
