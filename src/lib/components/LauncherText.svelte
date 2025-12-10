<script lang="ts">
	interface ILauncherTextDataProps {
		label: string;
		title: string;
		description: string;
	}

	const { label, title, description }: ILauncherTextDataProps = $props();
</script>

<div class="flex flex-col items-center">
	<span
		class="text-lg/[22px] font-bold text-center self-stretch font-jakarta text-[var(--cl-MainAccent)]"
		>{label}</span
	>
	<h1 class="mb-4 text-[46px]/[56px] font-jakarta font-bold text-[var(--cl-Text)]">{title}</h1>
	<p class=" text-base/7 text-center text-[var(--cl-Grey)]">{description}</p>
</div>
