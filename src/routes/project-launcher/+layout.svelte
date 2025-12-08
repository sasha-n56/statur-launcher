<script lang="ts">
	import LauncherHeader from '$lib/components/LauncherHeader.svelte';

	let { children } = $props();
</script>

<div class="relative min-h-screen flex flex-col">
	<LauncherHeader />
	<main class="flex flex-1 items-center justify-center">
		{@render children()}
	</main>
</div>
