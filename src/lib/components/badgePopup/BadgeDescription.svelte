<script lang="ts">
	import { t } from '$lib/i18n';
	import { nextStep, prevStep } from '$lib/store/stepPopup.store.svelte';
	import BadgeButton from './BadgeButton.svelte';
	import BadgeText from './BadgeText.svelte';
	let badgeTextData = {
		title: $t('administration.badges.stepDescription.title'),
		description: $t('administration.badges.stepDescription.description')
	};
</script>

<div class=" flex flex-col items-center">
	<BadgeText {...badgeTextData} />
	<input
		class="border"
		type="text"
		placeholder={$t('administration.badges.stepDescription.inputPlaceholder')}
	/>
	<div class="flex gap-3">
		<BadgeButton onClick={prevStep} name={$t('common.back')} />
		<BadgeButton onClick={nextStep} name={$t('common.next')} />
	</div>
</div>
