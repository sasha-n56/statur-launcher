<script lang="ts">
	import DatabaseError from './DatabaseError.svelte';
	import MissingKeys from './MissingKeys.svelte';
  let {isOpen, onClose, children)= $props();


	const open = () => (isOpen = true);
	const close = () => (isOpen = false);
</script>

<div class="fixed inset-0 bg-black/40 flex items-center justify-center" onclick={onClose}>
	<MissingKeys />
	<DatabaseError />
</div>
