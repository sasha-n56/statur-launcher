<script lang="ts">
	import AdminHeader from '$lib/components/AdminHeader.svelte';
	import { t } from '$lib/i18n';
</script>

<div class="flex flex-col w-full items-center">
	<AdminHeader />
	<main class="flex w-full h-full gap-5">
		<div class="w-xs">{$t('dashboard.leaderBoard')}</div>
		<div class="flex flex-1 flex-col">
			<div class="flex justify-between">
				<div>{$t('dashboard.accounts')}</div>
				<div>{$t('common.sort')}</div>
			</div>
			<div>
				<div class="flex justify-between">
					<div>{$t('common.account')}</div>
					<div>{$t('common.badges')}</div>
				</div>

				<a class="w-40 border" href={'/users/testUser'}>test user</a>
			</div>
		</div>
	</main>
</div>
