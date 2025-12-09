<script lang="ts">
	import LauncherText from '$lib/components/LauncherText.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';
	import { t } from '$lib/i18n';
	function onClick1() {
		// document.documentElement.style.setProperty('--l-MainAccent', '#555555');
		document.documentElement.setAttribute('data-theme', 'dark');
	}

	function onClick2() {
		document.documentElement.setAttribute('data-theme', 'light');
	}
</script>

<section class="flex w-full h-full items-center justify-center max-w-md bg-l-bg-0">
	<div class="flex flex-col items-center">
		<!-- <LauncherText -->
		<div>{$t('common.projectLauncher')}</div>
		<div>{$t('launcher.brandingStep.title')}</div>
		<div>{$t('launcher.brandingStep.description')}</div>
		<LinkButton href="/project-launcher/create-account" name={$t('common.next')} />
		<button onclick={onClick1}>color1</button>
		<button onclick={onClick2}>color2</button>
	</div>
</section>
