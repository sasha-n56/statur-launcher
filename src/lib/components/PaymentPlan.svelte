<script lang="ts">
	import { t } from 'svelte-i18n';
	import LauncherText from './LauncherText.svelte';
	import LauncherWidget from './LauncherWidget.svelte';
	import TierList from './TierList.svelte';

	const paymentPlanTextData = {
		label: $t('launcher.paymentPlanStep.label'),
		title: $t('launcher.paymentPlanStep.title'),
		description: $t('launcher.paymentPlanStep.description')
	};

	const { label, title, description } = paymentPlanTextData;
</script>

<LauncherWidget>
	{#snippet children()}
		<LauncherText {label} {title} {description} />
		<TierList />
	{/snippet}
</LauncherWidget>
