<script lang="ts">
	interface ILauncherTextDataProps {
		title: string;
		subtitle: string;
		description: string;
	}

	const { title, subtitle, description }: ILauncherTextDataProps = $props();
</script>

<div class="flex flex-col items-center">
	<p class="text-[18px]/[22px] font-bold font-jakarta text-main-accent">{title}</p>
	<h2 class="mb-4 text-[46px]/[56px] font-bold font-jakarta text-base">{subtitle}</h2>
	<div class="text-4/[28px] text-center text-grey-dark">{description}</div>
</div>
