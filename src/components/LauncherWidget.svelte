<script lang="ts">
	import { LAUNCHER_STEPS_DATA } from '../const';
	import LauncherText from './LauncherText.svelte';
	import WalletList from './WalletList.svelte';

	let { title, label, description } = LAUNCHER_STEPS_DATA[0];
</script>

<div
	class=" flex max-w-[480px] flex-col items-center gap-8 rounded-4xl bg-base/5 p-6 shadow-[0_0_15px_0_rgba(78,42,80,0.08)]"
>
	<LauncherText {title} {label} {description} />
	<WalletList />
</div>
