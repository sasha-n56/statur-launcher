<script lang="ts">
	import type { Component } from 'svelte';
	import { FlowStep } from '$lib/types/launcher';
	import WalletSignIn from '$lib/components/WalletSignIn.svelte';
	import PaymentPlan from '$lib/components/PaymentPlan.svelte';

	type StepConfig = {
		id: FlowStep;
		label: string;
		component: Component;
	};

	const FLOW_ORDER: FlowStep[] = [FlowStep.WalletSignIn];

	const STEPS: StepConfig[] = [
		{ id: FlowStep.WalletSignIn, label: 'WalletSignIn', component: WalletSignIn }
	];
</script>

<!-- <WalletSignIn /> -->
<PaymentPlan />
