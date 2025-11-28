<script lang="ts">
	interface ILinkButtonProps {
		name: string;
		icon: string;
		onClick: (walletName: string) => void;
	}

	const { name, icon, onClick }: ILinkButtonProps = $props();
</script>

<button
	onclick={() => onClick(name)}
	class="flex w-full items-center justify-between rounded-xl bg-linear-to-r from-main-accent to-second-accent-light p-[7px_7px_7px_14px] transition active:scale-95"
>
	<span class="text-4/[22px] font-bold text-stay-white">Connect {name} Account</span>
	<img src={icon} alt={name} />
</button>
