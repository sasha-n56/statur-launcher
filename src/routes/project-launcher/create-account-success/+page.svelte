<script lang="ts">
	import LinkButton from '$lib/components/LinkButton.svelte';
	import { t } from '$lib/i18n';
</script>

<section class="flex w-full h-full items-center justify-center max-w-md">
	<div class="flex flex-col items-center">
		<div>{$t('launcher.createAccountSuccessStep.label')}</div>
		<div>{'Gotham City'}</div>
		<div>{$t('launcher.createAccountSuccessStep.description')}</div>
		<LinkButton href="/administration/metric-fields" name={$t('common.join')} />
	</div>
</section>
