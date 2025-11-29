<script lang="ts">
	import { LAUNCHER_STEPS_DATA } from '../const';
	import WalletList from './WalletList.svelte';

	let { title, label, description } = LAUNCHER_STEPS_DATA[0];
</script>

<div
	class=" flex max-w-[480px] flex-col items-center gap-8 rounded-4xl bg-base/5 p-6 shadow-[0_0_15px_0_rgba(78,42,80,0.08)]"
>
	<div class="flex flex-col items-center">
		<span class="text-lg leading-tight font-bold font-jakarta text-main-accent">{label}</span>
		<h1 class="mb-4 text-[46px] leading-tight font-bold font-jakarta text-base">{title}</h1>
		<p class="text-center text-grey-dark">{description}</p>
	</div>
	<WalletList />
</div>
