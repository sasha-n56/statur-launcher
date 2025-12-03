<script lang="ts">
	import { t } from 'svelte-i18n';
	interface ILinkButtonProps {
		name: string;
		icon: string;
		onClick: (walletName: string) => void;
	}

	const { name, icon, onClick }: ILinkButtonProps = $props();
</script>

<button
	onclick={() => onClick(name)}
	class="flex w-full items-center justify-between rounded-xl bg-linear-to-r from-main-accent to-second-accent-light p-2 pl-4 transition active:scale-95"
>
	<span class="font-bold text-stay-white"
		>{$t('launcher.walletSignInStep.actionButton', { values: { name } })}</span
	>
	<img src={icon} alt={name} />
</button>
