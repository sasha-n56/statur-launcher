<script lang="ts">
	import { t } from '$lib/i18n';

	import { onClose } from '$lib/store/popup.store.svelte';
	function documenting() {
		onClose();
	}
</script>

<div class="flex flex-col items-center">
	<div class="flex flex-col items-center">
		<span>{$t('error.label')}</span>
		<h1>{$t('error.missingKeys.title')}</h1>
		<p>{$t('error.missingKeys.description')}</p>
	</div>

	<button class="border" onclick={documenting}>
		{$t('error.documentation')}
	</button>
</div>
