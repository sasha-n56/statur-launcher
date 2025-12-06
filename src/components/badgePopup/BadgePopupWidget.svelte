<script lang="ts">
	import BadgeDescription from './BadgeDescription.svelte';
	import BadgeName from './BadgeName.svelte';

	let isOpen = false;

	const open = () => (isOpen = true);
	const close = () => (isOpen = false);
</script>

<div>
	<BadgeName />
	<BadgeDescription />
</div>
