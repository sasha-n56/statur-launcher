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
			<div>{$t('administration.settingsMenu.metricFields')}</div>
			<div>{$t('administration.metricFields.description')}</div>
			<div class="flex justify-between">
				<div>{$t('administration.metricFields.columns.label')}</div>
				<div>{$t('administration.metricFields.columns.key')}</div>
				<div>{$t('administration.metricFields.columns.unit')}</div>
				<div>{$t('administration.metricFields.columns.weight')}</div>
			</div>
		</div>
	</main>
</div>
