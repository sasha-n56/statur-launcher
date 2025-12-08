<script lang="ts">
	interface IButtonProps {
		onClick?: () => void;
		name: string;
	}

	let { onClick, name }: IButtonProps = $props();
</script>

<button onclick={onClick} class="border">
	{name}
</button>
