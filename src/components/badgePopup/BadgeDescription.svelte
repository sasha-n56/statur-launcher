<script lang="ts">
	import { t } from '$lib/i18n';
	import BadgeButton from './BadgeButton.svelte';
	import BadgeText from './BadgeText.svelte';
	let badgeTextData = {
		title: $t('administration.badges.stepDescription.title'),
		description: $t('administration.badges.stepDescription.description')
	};
</script>

<div class=" flex flex-col items-center relative border max-w-[480px]">
	<BadgeText {...badgeTextData} />
	<input
		class="border"
		type="text"
		placeholder={$t('administration.badges.stepDescription.inputPlaceholder')}
	/>
	<div class="flex gap-3">
		<BadgeButton name={$t('common.back')} />
		<BadgeButton name={$t('common.next')} />
	</div>
</div>
