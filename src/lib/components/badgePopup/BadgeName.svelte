<script lang="ts">
	import { t } from '$lib/i18n';
	import { nextStep } from '$lib/store/stepPopup.store.svelte';
	import BadgeText from './BadgeText.svelte';
	let badgeTextData = {
		title: $t('administration.badges.stepName.title'),
		description: $t('administration.badges.stepName.description')
	};
</script>

<div class=" flex flex-col items-center relative border max-w-[480px]">
	<BadgeText {...badgeTextData} />
	<input class="border" type="text" placeholder={$t('administration.badges.stepName.title')} />
	<!-- <button class="border">{$t('common.next')}</button> -->
	<button onclick={nextStep} class="border">{$t('common.next')}</button>
</div>
