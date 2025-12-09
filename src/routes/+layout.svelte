<script lang="ts">
	import './layout.css';
	import '$lib/i18n';
	import { svelteFavicon } from '$lib/assets';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={svelteFavicon} />
</svelte:head>
<!-- bg-l-MainAccent -->
<div data-theme="light" class="min-h-screen w-full bg-[var(--l-STAY-Darko)] text-white">
	{@render children()}
</div>
