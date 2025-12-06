<script lang="ts">
	interface IButtonProps {
		onClick?: () => void;
		name: string;
	}

	let { onClick, name }: IButtonProps = $props();
</script>

<button class="border">
	{name}
</button>
