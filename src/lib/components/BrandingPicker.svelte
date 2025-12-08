<script lang="ts">
	interface IBrandingColor {
		id: string;
		name: string;
	}

	const BRANDING_COLORS: IBrandingColor[] = [
		{
			id: '1',
			name: 'pink'
		},
		{
			id: '2',
			name: 'blue'
		},
		{
			id: '3',
			name: 'green'
		},
		{
			id: '4',
			name: 'yellow'
		},
		{
			id: '5',
			name: 'orange'
		},
		{
			id: '6',
			name: 'red'
		}
	];

	let activeColor: IBrandingColor = $state(BRANDING_COLORS[0]);

	const onColorClickHandler = (color: IBrandingColor) => {
		activeColor = color;
	};
</script>

<div class="flex w-full flex-col">
	<div class="flex w-full items-center justify-between px-5">
		{#each BRANDING_COLORS as color}
			<button
				class="flex h-8 w-8 items-center justify-center rounded-full {color}"
				onclick={() => onColorClickHandler(color)}
			>
				{#if activeColor.id === color.id}
					<div class="absolute h-3 w-3 rounded-full bg-text-white"></div>
				{/if}
			</button>
		{/each}
	</div>

	<div class="flex w-full justify-between">
		<button class="bg-amber-600">back</button>
		<button class="bg-amber-950">next</button>
	</div>
</div>
