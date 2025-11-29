<script lang="ts">
	import type { Component } from 'svelte';
	import { FlowStep } from '$types/launcher.ts';
	import WalletSignIn from '$components/WalletSignIn.svelte';

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

<WalletSignIn />
