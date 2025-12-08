<script lang="ts">
	import { t } from '$lib/i18n';
	import { closeStepPopup, prevStep } from '$lib/store/stepPopup.store.svelte';
	import BadgeButton from './BadgeButton.svelte';
	import BadgeText from './BadgeText.svelte';

	let badgeTextData = {
		title: $t('administration.badges.stepMechanics.title'),
		description: $t('administration.badges.stepMechanics.description')
	};

	let value = '';
	function createBadge() {
		closeStepPopup();
	}
</script>

<div class=" flex flex-col items-center">
	<BadgeText {...badgeTextData} />
	<select>
		<option value="">PincoPallo</option>
	</select>
	<input
		bind:value
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
		<BadgeButton onClick={prevStep} name={$t('common.back')} />
		<BadgeButton onClick={createBadge} name={$t('common.createBadge')} />
	</div>
</div>
