<script>
	import { t } from '$lib/i18n';

	const menuItems = [
		{ key: 'administration.settingsMenu.metricFields', href: '/administration/metric-fields' },
		{
			key: 'administration.settingsMenu.dashboardLayout',
			href: '/administration/dashboard-layout'
		},
		{ key: 'administration.settingsMenu.profilesLayout', href: '/administration/profiles-layout' },
		{ key: 'administration.settingsMenu.badges', href: '/administration/badges' },
		{ key: 'administration.settingsMenu.administrators', href: '/administration/administrators' },
		{ key: 'administration.settingsMenu.apiAndPayment', href: '/administration/api-and-payment' }
	];
</script>

<nav class="flex flex-col border">
	{#each menuItems as item}
		<a href={item.href}>
			{$t(item.key)}
		</a>
	{/each}
</nav>
