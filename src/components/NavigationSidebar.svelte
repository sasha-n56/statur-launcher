<script>
	const menuItems = [
		{ label: 'Metric Fields', href: '/administration/metrics-fields' },
		{ label: 'Dashboard Layout', href: '/administration/dashboard-layout' },
		{ label: 'Profiles Layout', href: '/administration/profiles-layout' },
		{ label: 'Badges', href: '/administration/badges' },
		{ label: 'Administrators', href: '/administration/administrators' },
		{ label: 'API & Payment', href: '/administration/api-and-payment' }
	];
</script>

<nav class="flex flex-col border">
	{#each menuItems as item}
		<a href={item.href}> {item.label} </a>
	{/each}
</nav>
