<script lang="ts">
	import { t } from '$lib/i18n';
	import BadgeButton from './BadgeButton.svelte';
	import BadgeText from './BadgeText.svelte';
	let badgeTextData = {
		title: $t('administration.badges.stepMechanics.title'),
		description: $t('administration.badges.stepMechanics.description')
	};
</script>

<div class=" flex flex-col items-center relative border max-w-[480px]">
	<BadgeText {...badgeTextData} />
	<select>
		<option value="">PincoPallo</option>
	</select>
	<input
		class="border"
		type="text"
		placeholder={$t('administration.badges.stepMechanics.valueToReach')}
	/>
	<div>
		<p>{$t('administration.badges.stepMechanics.valueDirection')}</p>
		<p>{$t('administration.badges.stepMechanics.equalsOrMore')}</p>
		<p>{$t('administration.badges.stepMechanics.equalsOrLess')}</p>
		<p>{$t('administration.badges.stepMechanics.exactValue')}</p>
	</div>
	<div class="flex gap-3">
		<BadgeButton name={$t('common.back')} />
		<BadgeButton name={$t('common.createBadge')} />
	</div>
</div>
