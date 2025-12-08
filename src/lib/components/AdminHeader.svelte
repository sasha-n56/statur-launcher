<script lang="ts">
	import { t } from '$lib/i18n';
</script>

<header class="flex w-full justify-between">
	<div class="flex">
		<div>{$t('common.statur')}</div>
		<div>Gotham city</div>
	</div>

	<div class="flex gap-3">
		<a href={'/users'}>{$t('header.dashboard')}</a>
		<a href="/administration/metric-fields">{$t('header.administration')}</a>
		<a href={'/account'}>Account</a>
		<a href={'/logout'}>Logout</a>
	</div>
</header>
