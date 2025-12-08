<script lang="ts">
	import DatabaseError from './DatabaseError.svelte';
	import MissingKeys from './MissingKeys.svelte';

	import { isOpen, onClose } from '$lib/store/popup.store.svelte';
</script>

{#if isOpen()}
	<div class="fixed inset-0 bg-black/40 flex items-center justify-center" onclick={onClose}>
		<MissingKeys />
		<DatabaseError />
	</div>
{/if}
