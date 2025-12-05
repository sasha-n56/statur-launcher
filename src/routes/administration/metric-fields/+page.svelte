<script lang="ts">
	import AdminHeader from '$components/AdminHeader.svelte';
	import LinkButton from '$components/LinkButton.svelte';
	import NavigationSidebar from '$components/NavigationSidebar.svelte';
	import { t } from '$lib/i18n';
</script>

<div class="flex flex-col w-full items-center">
	<AdminHeader />
	<main class="flex w-full h-full gap-5">
		<aside class="flex flex-col w-xs">
			<div>Settings menu</div>
			<NavigationSidebar />
		</aside>
		<div class="flex flex-1 flex-col">
			<div>{$t('common.welcome')}</div>
			<div>{$t('launcher.createAccountStep.title')}</div>
			<LinkButton href="/sign-up/create-account-success" name={$t('common.create')} />
		</div>
	</main>
</div>
