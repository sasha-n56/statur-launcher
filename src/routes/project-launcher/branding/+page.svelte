<script lang="ts">
	import LauncherText from '$lib/components/LauncherText.svelte';
	import LinkButton from '$lib/components/LinkButton.svelte';
	import { t } from '$lib/i18n';

	const PinkDark = {
		'--l-STAY-Darko': '#1F0726',
		'--l-MainAccent': '#EB50AD',
		'--l-MainAccent-20': '#EB50AD33',
		'--l-MainAccent-light': '#FF59BD',
		'--l-SecondAccent': '#4E2A50',
		'--l-SecondAccent-08': '#4E2A5014',
		'--l-SecondAccent-light': '#6E3A70'
	};

	const GreenDark = {
		'--l-STAY-Darko': '#070E0C',
		'--l-MainAccent': '#07A27B',
		'--l-MainAccent-20': '#07A27B33',
		'--l-MainAccent-light': '#09C193',
		'--l-SecondAccent': '#1A4238',
		'--l-SecondAccent-08': '#1A42380F',
		'--l-SecondAccent-light': '#205044'
	};

	function applyColorSet(colors: any) {
		const root = document.documentElement;
		for (const key in colors) {
			root.style.setProperty(key, colors[key]);
		}
	}

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
