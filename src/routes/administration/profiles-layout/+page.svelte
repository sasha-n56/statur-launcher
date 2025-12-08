<script lang="ts">
	import AdminHeader from '$lib/components/AdminHeader.svelte';
	import NavigationSidebar from '$lib/components/NavigationSidebar.svelte';
	import { t } from '$lib/i18n';
</script>

<div class="flex flex-col w-full items-center">
	<AdminHeader />
	<main class="flex w-full h-full gap-5">
		<aside class="flex flex-col w-xs">
			<div>{$t('administration.title')}</div>
			<NavigationSidebar />
		</aside>
		<div class="flex flex-1 flex-col">
			<div>{$t('administration.settingsMenu.profilesLayout')}</div>
			<div>
				<div>{$t('administration.profilesLayout.label')}</div>
				<div>{$t('administration.profilesLayout.description')}</div>
			</div>
			<div>{$t('administration.profilesLayout.accountPageFieldsOrder')}</div>
			<div>
				<div>{$t('administration.profilesLayout.trackingFields')}</div>
			</div>
			<div class="flex">
				<div>{$t('administration.profilesLayout.trackingFields')}</div>
				<div>{$t('common.remove')}</div>
			</div>
			<div>{$t('administration.profilesLayout.addNewSection')}</div>
		</div>
	</main>
</div>
