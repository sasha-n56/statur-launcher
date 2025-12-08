<script lang="ts">
	import { closeStepPopup, currentStep, isOpen } from '$lib/store/stepPopup.store.svelte';
	import BadgeDescription from './BadgeDescription.svelte';
	import BadgeIcon from './BadgeIcon.svelte';
	import BadgeMechanics from './BadgeMechanics.svelte';
	import BadgeName from './BadgeName.svelte';
</script>

{#if isOpen()}
	<div
		class="fixed inset-0 bg-black/80 flex items-center justify-center"
		onclick={closeStepPopup}
		role="button"
		tabindex="0"
		onkeydown={closeStepPopup}
	>
		<div
			class="relative border max-w-[480px]"
			onclick={(e: MouseEvent) => e.stopPropagation()}
			role="dialog"
			tabindex="0"
			onkeydown={(e: KeyboardEvent) => {
				e.stopPropagation();
				if (e.key === 'Escape') closeStepPopup();
			}}
		>
			{#if currentStep() === 0}
				<BadgeName />
			{:else if currentStep() === 1}
				<BadgeDescription />
			{:else if currentStep() === 2}
				<BadgeIcon />
			{:else if currentStep() === 3}
				<BadgeMechanics />
			{/if}
		</div>
	</div>
{/if}
