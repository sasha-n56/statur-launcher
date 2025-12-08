<script lang="ts">
	import LinkButton from '$lib/components/LinkButton.svelte';
	import SignUpHeader from '$lib/components/SignUpHeader.svelte';
	import { t } from '$lib/i18n';
</script>

<div class="flex flex-col w-full items-center">
	<SignUpHeader />
	<main class="flex w-full h-full items-center justify-center max-w-md">
		<div class="flex flex-col items-center">
			<div>{$t('launcher.createAccountSuccessStep.label')}</div>
			<div>{'Gotham City'}</div>
			<div>{$t('launcher.createAccountSuccessStep.description')}</div>
			<LinkButton href="/dashboard" name={$t('common.join')} />
		</div>
	</main>
</div>
