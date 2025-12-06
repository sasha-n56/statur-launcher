<script lang="ts">
	import { t } from '$lib/i18n';
</script>

<div class=" flex flex-col items-center relative border max-w-[480px]">
	<div class="flex flex-col items-center justify-center">
		<span class="">{$t('common.createBadge')}</span>
		<h2 class="">{$t('administration.badges.stepName.title')}</h2>
		<p class="">{$t('administration.badges.stepName.description')}</p>
	</div>
	<input type="text" placeholder={$t('common.next')} />
	<button class="border">{$t('common.next')}</button>
</div>
