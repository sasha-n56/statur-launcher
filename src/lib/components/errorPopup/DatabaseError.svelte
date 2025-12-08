<script lang="ts">
	import { t } from '$lib/i18n';
</script>

<div class=" flex flex-col items-center relative border max-w-[480px]">
	<div class="flex flex-col items-center">
		<span>{$t('error.label')}</span>
		<h1>{$t('error.databaseError.title')}</h1>
		<p>{$t('error.databaseError.description')}</p>
	</div>

	<button class="border">
		{$t('error.documentation')}
	</button>
</div>
