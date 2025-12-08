<script lang="ts">
	import UserHeader from '$lib/components/UserHeader.svelte';
	import { t } from '$lib/i18n';
</script>

<div class="flex flex-col w-full items-center">
	<UserHeader />
	<main class="flex w-full h-full">
		<div class="flex">
			<div class="w-xs">{$t('administration.settingsMenu.badges')}</div>
			<div class="w-xs">{$t('user.address')}</div>
		</div>
	</main>
</div>
