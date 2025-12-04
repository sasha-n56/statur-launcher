<script lang="ts">
	import './layout.css';
	import '$lib/i18n';
	import { svelteFavicon } from '$lib/assets';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={svelteFavicon} />
</svelte:head>

<div class="text-white flex min-h-screen w-full overflow-hidden bg-stay-dark">
	{@render children()}
</div>
