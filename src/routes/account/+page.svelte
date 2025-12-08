<script lang="ts">
	import AdminHeader from '$lib/components/AdminHeader.svelte';
	import { t } from '$lib/i18n';
</script>

<div class="flex flex-col w-full items-center">
	<AdminHeader />
	<main class="flex w-full h-full">
		<div class="flex">
			<div class="w-xs">{$t('administration.settingsMenu.badges')}</div>
			<div class="w-xs">{$t('user.address')}</div>
		</div>
	</main>
</div>
