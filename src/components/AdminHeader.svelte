<script lang="ts">
	import { t } from '$lib/i18n';
</script>

<header class="flex w-full justify-between">
	<div>{$t('common.statur')}</div>

	<div class="flex gap-3">
		<a href="/administration/metrics-fields">{$t('header.administration')}</a>
		<a href={'/administration/dashboard-layout'}>{$t('header.dashboard')}</a>
	</div>
</header>
