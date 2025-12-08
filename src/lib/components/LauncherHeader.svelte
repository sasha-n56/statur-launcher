<script lang="ts">
	import { t } from '$lib/i18n';
</script>

<header class="absolute flex w-full h-[90px] justify-between items-center px-[30px]">
	<div class="flex items-center gap-2">
		<div>logo</div>
		{$t('common.statur')}
		{$t('common.projectLauncher')}
	</div>
	<div class="justify-self-center">dot step counter</div>
	<div class="justify-self-end">logout</div>
</header>
