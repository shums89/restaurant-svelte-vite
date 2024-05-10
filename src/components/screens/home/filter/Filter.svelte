<script lang="ts">
	import FilterItem from './FilterItem.svelte'

	const filters = [
		{
			name: 'Cafe',
			icon: './images/filters/hamburger.svg',
			color: '#eaf2ff',
			categories: 'cafe'
		},
		{
			name: 'Cinema',
			icon: './images/filters/popcorn.svg',
			color: '#e4f6ea',
			categories: 'cinema'
		},
		{
			name: 'Stand-up',
			icon: './images/filters/old-microphone.svg',
			color: '#feefea',
			categories: 'stand-up'
		},
		{
			name: 'Ice cream',
			icon: './images/filters/ice-cream-cone.svg',
			color: '#fdf8e2',
			categories: 'ice-cream'
		}
	]
</script>

<div class="filter">
	{#each filters as filter}
		<FilterItem {filter} />
	{/each}
</div>

<style lang="scss">
	.filter {
		@apply mt-5 flex items-center justify-between;
	}
</style>
