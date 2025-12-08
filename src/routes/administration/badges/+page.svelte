<script lang="ts">
	import MissingKeys from '$lib/components/errorPopup/MissingKeys.svelte';
	import AdminHeader from '$lib/components/AdminHeader.svelte';
	import BadgePopupWidget from '$lib/components/badgePopup/BadgePopupWidget.svelte';
	import ErrorPopupWidget from '$lib/components/errorPopup/ErrorPopupWidget.svelte';
	import NavigationSidebar from '$lib/components/NavigationSidebar.svelte';
	import { t } from '$lib/i18n';
	import { onOpen } from '$lib/store/popup.store.svelte';
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
			<button class="border w-20" onclick={onOpen}> showError </button>
			<div>{$t('common.createBadge')}</div>

			<BadgePopupWidget />

			<ErrorPopupWidget>
				{#snippet children()}
					<MissingKeys />
					<!-- <DatabaseError /> -->
				{/snippet}
			</ErrorPopupWidget>
		</div>
	</main>
</div>
