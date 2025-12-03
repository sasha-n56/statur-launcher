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
	class="w-full rounded-[100px] bg-main-accent py-2 text-stay-white {style}"
	disabled={isDisabled}
>
	{@render children()}
</button>
