<script lang="ts">
	interface ILauncherTextDataProps {
		label: string;
		title: string;
		description: string;
	}

	const { label, title, description }: ILauncherTextDataProps = $props();
</script>

<div class="flex flex-col items-center">
	<span class="text-lg leading-tight font-bold font-jakarta text-main-accent">{label}</span>
	<h1 class="mb-4 text-[46px] leading-tight font-bold font-jakarta text-base">{title}</h1>
	<p class="text-center text-grey-dark">{description}</p>
</div>
