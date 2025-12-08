<script lang="ts">
	let { children } = $props();
</script>

<div
	class=" flex max-w-[480px] flex-col items-center gap-8 rounded-4xl bg-base/5 p-6 shadow-[0_0_15px_0_rgba(78,42,80,0.08)]"
>
	{@render children()}
</div>
