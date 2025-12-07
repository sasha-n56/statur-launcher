<script lang="ts">
	import DatabaseError from './DatabaseError.svelte';
	import MissingKeys from './MissingKeys.svelte';

	let isOpen = false;

	const open = () => (isOpen = true);
	const close = () => (isOpen = false);
</script>

<div>
	<MissingKeys />
	<DatabaseError />
</div>
