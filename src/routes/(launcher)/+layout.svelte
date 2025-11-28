<script lang="ts">
	let { children } = $props();
</script>

<div class="relative flex min-h-screen w-full overflow-hidden">
	<main class="flex w-full items-center justify-center">
		{@render children()}
	</main>
</div>
