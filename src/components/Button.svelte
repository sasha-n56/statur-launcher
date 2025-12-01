<script lang="ts">
	import type { Snippet } from 'svelte';

	interface IButtonProps {
		onClick: () => void;
		children: Snippet;
		isDisabled?: boolean;
		style?: string;
	}

	let { onClick, children, isDisabled, style }: IButtonProps = $props();
</script>

<button
	onclick={() => onClick()}
	class="w-full rounded-[100px] bg-brand-pink-light py-2 text-base/[22px] text-text-white {style}"
	disabled={isDisabled}
>
	{@render children()}
</button>
