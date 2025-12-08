<script lang="ts">
	import {
		closeStepPopup,
		currentStep,
		isOpen,
		nextStep,
		prevStep
	} from '$lib/store/stepPopup.store.svelte';
	import BadgeDescription from './BadgeDescription.svelte';
	import BadgeIcon from './BadgeIcon.svelte';
	import BadgeMechanics from './BadgeMechanics.svelte';
	import BadgeName from './BadgeName.svelte';
</script>

<div>
	<BadgeName />
	<BadgeDescription />
	<BadgeIcon />
	<BadgeMechanics />
</div>
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
				if (e.key === 'Enter' || e.key === ' ') e.stopPropagation();
			}}
		>
			{#if currentStep() === 0}
				<BadgeName />
			{:else if currentStep() === 1}
				<BadgeIcon />
			{:else if currentStep() === 2}
				<BadgeDescription />
			{:else if currentStep() === 3}
				<BadgeMechanics />
			{/if}

			<!-- <div class="mt-4 flex justify-end gap-2"> -->
			<!-- 	{#if currentStep() > 0} -->
			<!-- 		<button onclick={prevStep}>Назад</button> -->
			<!-- 	{/if} -->
			<!---->
			<!-- 	{#if currentStep() < 2} -->
			<!-- 		<button onclick={nextStep}>Далее</button> -->
			<!-- 	{:else} -->
			<!-- 		<button onclick={closeStepPopup}>Готово</button> -->
			<!-- 	{/if} -->
			<!-- </div> -->
		</div>
	</div>
{/if}
