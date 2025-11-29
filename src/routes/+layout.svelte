<script lang="ts">
	import './layout.css';
	import { svelteFavicon } from '$lib/assets';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={svelteFavicon} />
</svelte:head>

<div class="flex min-h-screen w-full overflow-hidden bg-stay-dark">
	{@render children()}
</div>
