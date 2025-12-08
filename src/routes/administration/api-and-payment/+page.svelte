<script lang="ts">
	import AdminHeader from '$lib/components/AdminHeader.svelte';
	import NavigationSidebar from '$lib/components/NavigationSidebar.svelte';
	import { t } from '$lib/i18n';
</script>

<div class="flex flex-col w-full items-center">
	<AdminHeader />
	<main class="flex w-full h-full gap-5">
		<aside class="flex flex-col w-xs">
			<div>{$t('administration.title')}</div>
			<NavigationSidebar />
		</aside>
		<div class="flex flex-1 flex-col">
			<div>{$t('administration.settingsMenu.apiAndPayment')}</div>
			<div>{$t('administration.apiAndPayment.description')}</div>
			<div class="flex w-full">
				<div class="flex-1">
					<div class="flex justify-between">
						<div>{$t('administration.apiAndPayment.yourPlan')}</div>
						<div>{$t('administration.apiAndPayment.expires')}</div>
					</div>
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
					<div class="flex justify-between">
						<div>{$t('common.change')}</div>
						<div>{$t('common.renew')}</div>
					</div>
				</div>

				<div class="flex flex-1 justify-between">
					<div>{$t('administration.apiAndPayment.apiUsage')}</div>
					<div>{$t('administration.apiAndPayment.dailyCalls')}</div>
				</div>
			</div>
		</div>
	</main>
</div>
