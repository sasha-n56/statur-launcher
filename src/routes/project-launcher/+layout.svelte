<script lang="ts">
	import LauncherHeader from '$lib/components/LauncherHeader.svelte';

	let { children } = $props();
</script>

<div
	class="relative mx-auto flex flex-col justify-center min-h-screen max-w-[1440px] w-full overflow-hidden bg-stay-dark"
>
	<LauncherHeader />
	<main class="flex flex-1 w-full items-center justify-center">
		{@render children()}
	</main>
</div>
