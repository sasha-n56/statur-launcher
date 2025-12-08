<script lang="ts">
	let { children } = $props();
	import { isOpen, onClose } from '$lib/store/popup.store.svelte';
</script>

{#if isOpen()}
	<div
		class="fixed inset-0 bg-black/80 flex items-center justify-center"
		onclick={onClose}
		role="button"
		tabindex="0"
		onkeydown={onClose}
	>
		<div
			class="relative border max-w-[480px]"
			onclick={(e: MouseEvent) => e.stopPropagation()}
			role="dialog"
			tabindex="0"
			onkeydown={(e: KeyboardEvent) => {
				if (e.key === 'Enter' || e.key === ' ') e.stopPropagation();
			}}
		>
			{@render children()}
		</div>
	</div>
{/if}
