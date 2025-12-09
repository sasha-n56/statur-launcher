<script lang="ts">
	import './layout.css';
	import '$lib/i18n';
	import { svelteFavicon } from '$lib/assets';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={svelteFavicon} />
</svelte:head>
<!-- bg-[var(--l-MainAccent)] -->
<div data-theme="light" class="min-h-screen w-full bg-l-MainAccent text-white">
	{@render children()}
</div>
