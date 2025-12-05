<script lang="ts">
	import { t } from '$lib/i18n';
</script>

<header class="flex w-full justify-between">
	<button class="border" on:click={() => history.back()}>
		{$t('common.back')}
	</button>

	<div class="flex gap-3">
		<a href={'/users'}>{$t('header.dashboard')}</a>
		<a href="/administration/metric-fields">{$t('header.administration')}</a>
		<a href={'/account'}>Account</a>
		<a href={'/logout'}>Logout</a>
	</div>
</header>
