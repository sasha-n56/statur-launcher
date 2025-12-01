<script lang="ts">
	import { PAYMENT_PLAN_TEXT_DATA } from '$const';
	import LauncherText from './LauncherText.svelte';
	import LauncherWidget from './LauncherWidget.svelte';

	const { label, title, description } = PAYMENT_PLAN_TEXT_DATA;
</script>

<LauncherWidget>
	{#snippet children()}
		<LauncherText {label} {title} {description} />
		<TierList />
	{/snippet}
</LauncherWidget>
