<script lang="ts">
	import LauncherHeader from '$components/LauncherHeader.svelte';
	import LinkButton from '$components/LinkButton.svelte';
	import { t } from '$lib/i18n';
</script>

<div class="flex flex-col w-full items-center">
	<LauncherHeader />
	<main class="flex w-full h-full items-center justify-center max-w-md">
		<div class="flex flex-col items-center">
			<div>{$t('launcher.paymentPlanStep.label')}</div>
			<div>{$t('launcher.paymentPlanStep.title')}</div>
			<div>{$t('launcher.paymentPlanStep.description')}</div>

			<div class="flex-1">
				<div>
					<div class="flex w-full items-center justify-between">
						<div class="flex">
							<div>{$t('launcher.paymentPlanStep.pricePerMonth')}</div>
							<div>{$t('launcher.paymentPlanStep.perMonth')}</div>
						</div>
						<div>{$t('launcher.paymentPlanStep.ada')}</div>
					</div>
					<div class="flex w-full justify-between">
						<div>{$t('launcher.paymentPlanStep.apiCalls')}</div>
						<div>{$t('launcher.paymentPlanStep.perDay')}</div>
					</div>
				</div>
			</div>
			<LinkButton
				href="/project-launcher/project-info"
				name={$t('launcher.paymentPlanStep.actionButton')}
			/>
		</div>
	</main>
</div>
