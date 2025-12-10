<script lang="ts">
	import LauncherText from '$lib/components/LauncherText.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';
	import { t } from '$lib/i18n';

	function onClick1() {
		// applyColorSet(PinkDark);
		// document.documentElement.style.setProperty('--l-MainAccent', '#555555');
		document.documentElement.setAttribute('data-brand', 'pink');
	}

	function onClick2() {
		// applyColorSet(GreenDark);
		document.documentElement.setAttribute('data-brand', 'green');
	}
</script>

<section class="flex w-full h-full items-center justify-center max-w-md">
	<div class="flex flex-col items-center">
		<!-- <LauncherText -->
		<div class="text-[var(--cl-MainAccent)]">{$t('common.projectLauncher')}</div>
		<div class="text-[var(--cl-SecondAccent)]">{$t('launcher.brandingStep.title')}</div>
		<div>{$t('launcher.brandingStep.description')}</div>
		<LinkButton href="/project-launcher/create-account" name={$t('common.next')} />
		<button onclick={onClick1}>color1</button>
		<button onclick={onClick2}>color2</button>
	</div>
</section>
