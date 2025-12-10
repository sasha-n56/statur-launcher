<script lang="ts">
	import { goto } from '$app/navigation';
	import BrandingPicker from '$lib/components/BrandingPicker.svelte';
	import LauncherText from '$lib/components/LauncherText.svelte';
	import { t } from '$lib/i18n';

	const textData = {
		label: $t('common.projectLauncher'),
		title: $t('launcher.brandingStep.title'),
		description: $t('launcher.brandingStep.description')
	};

	const next = () => goto('/project-launcher/create-account');
	const back = () => (history.length > 1 ? history.back() : goto('/'));
</script>

<section class="flex w-full h-full items-center justify-center max-w-md">
	<div class="flex flex-col max-w-[480px] items-center gap-8 p-6 rounded-4xl bg-[var(--cl-BG-1)]">
		<LauncherText {...textData} />
		<BrandingPicker />
		<div class="flex justify-between w-full gap-5">
			<button
				class="w-full py-2 px-7 text-base/[22px] rounded-[100px] bg-[var(--cl-SecondAccent)] text-[var(--cl-STAY-white)]"
				onclick={back}>{$t('common.back')}</button
			>
			<button
				class="w-full py-2 px-7 text-base/[22px] rounded-[100px] bg-[var(--cl-MainAccent)] text-[var(--cl-STAY-white)]"
				onclick={next}>{$t('common.next')}</button
			>
		</div>
	</div>
</section>
