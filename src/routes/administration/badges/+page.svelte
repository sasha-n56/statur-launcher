<script lang="ts">
	import AdminHeader from '$components/AdminHeader.svelte';
	import BadgePopupWidget from '$components/badgePopup/BadgePopupWidget.svelte';
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
			<div>{$t('administration.settingsMenu.badges')}</div>
			<div>{$t('administration.badges.description')}</div>

			<div>{$t('common.createBadge')}</div>

			<BadgePopupWidget />
		</div>
	</main>
</div>
