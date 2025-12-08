<script lang="ts">
	import { t } from '$lib/i18n';
	const { title, description } = $props();
</script>

<div class="flex flex-col items-center">
	<span>{$t('common.createBadge')}</span>
	<h1>{title}</h1>
	<p>{description}</p>
</div>
