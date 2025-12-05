<script lang="ts">
	import AdminHeader from '$components/AdminHeader.svelte';
	import NavigationSidebar from '$components/NavigationSidebar.svelte';
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
			<div>{$t('administration.settingsMenu.dashboardLayout')}</div>
			<div>{$t('administration.dashboardLayout.description')}</div>
			<div class="flex w-full">
				<div class="flex-1">{$t('administration.dashboardLayout.leaderboardPlusAccountList')}</div>
				<div class="flex-1">{$t('administration.dashboardLayout.accountsSorting')}</div>
			</div>
			<div>
				<div>{$t('administration.dashboardLayout.metricFields')}</div>
				<div>
					<div class="flex-1">{$t('administration.dashboardLayout.metricFields')}</div>
					<div class="flex-1">{$t('administration.dashboardLayout.metricFields')}</div>
				</div>
			</div>
		</div>
	</main>
</div>
