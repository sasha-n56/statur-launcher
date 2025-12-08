<script lang="ts">
	import './layout.css';
	import '$lib/i18n';
	import { svelteFavicon } from '$lib/assets';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={svelteFavicon} />
</svelte:head>

<div class="min-h-screen w-full bg-stay-dark text-white">
	{@render children()}
</div>
