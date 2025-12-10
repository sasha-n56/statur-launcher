<script lang="ts">
	type BrandName = 'pink' | 'blue' | 'green' | 'yellow' | 'orange' | 'red';

	interface IBrandingColor {
		id: string;
		name: BrandName;
		hex: string;
	}

	const BRANDING_COLORS: IBrandingColor[] = [
		{
			id: '1',
			name: 'pink',
			hex: '#EB50AD'
		},
		{
			id: '2',
			name: 'blue',
			hex: '#5084EB'
		},
		{
			id: '3',
			name: 'green',
			hex: '#07A27B'
		},
		{
			id: '4',
			name: 'yellow',
			hex: '#EBBA50'
		},
		{
			id: '5',
			name: 'orange',
			hex: '#EB6F50'
		},
		{
			id: '6',
			name: 'red',
			hex: '#E53961'
		}
	];

	let activeColor: IBrandingColor = $state(BRANDING_COLORS[0]);

	const onColorClick = (color: IBrandingColor) => {
		activeColor = color;
		document.documentElement.setAttribute('data-brand', color.name);
	};
</script>

<div class="flex w-full flex-col">
	<div class="flex w-full items-center justify-between px-5">
		{#each BRANDING_COLORS as color}
			<button
				class="flex h-8 w-8 items-center justify-center rounded-full"
				style:background-color={color.hex}
				onclick={() => onColorClick(color)}
			>
				{#if activeColor.id === color.id}
					<div class="absolute h-3 w-3 rounded-full bg-[var(--cl-STAY-white)]"></div>
				{/if}
			</button>
		{/each}
	</div>
</div>
