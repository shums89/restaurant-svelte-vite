<script lang="ts">
	import { derived, readable } from 'svelte/store'
	import { filter } from '../../../../store.js'
	import CatalogItem from './CatalogItem.svelte'
	import type { IResraurant } from './restaurant.interface'

	const entries = readable<IResraurant[]>([
		{
			img: './images/restaurants/the-james-soho.webp',
			destination: 1,
			slug: 'the-james-soho',
			name: 'The James Soho',
			kitchens: ['Italian', 'Japenese'],
			priceRating: '$$$',
			rating: 4.7,
			categories: ['cafe', 'ice-cream']
		},
		{
			img: './images/restaurants/vegan-cafe.webp',
			destination: 2,
			slug: 'vegan-cafe',
			name: 'Vegan Cafe',
			kitchens: ['Vegan'],
			priceRating: '$$',
			rating: 4.2,
			categories: ['ice-cream', 'cinema']
		},
		{
			img: './images/restaurants/arizona.webp',
			destination: 4.5,
			slug: 'arizona',
			name: 'Arizona',
			kitchens: ['Asian', 'Chinese'],
			priceRating: '$$$$',
			rating: 4.8,
			categories: ['cafe', 'stand-up']
		}
	])

	const filtered = derived([filter, entries], () => {
		let newArray = $entries

		if ($filter.searchTerm) {
			newArray = newArray.filter(({ name }) =>
				name.toLowerCase().includes($filter.searchTerm.toLowerCase())
			)
		}

		if ($filter.currentFilter) {
			newArray = newArray.filter(({ categories }) =>
				categories.includes($filter.currentFilter)
			)
		}

		return newArray
	})
</script>

<div class="catalog">
	{#each $filtered as restaurant (restaurant.name)}
		<CatalogItem {restaurant} />
	{/each}
</div>

<style lang="scss">
	.catalog {
		@apply mt-8;
	}
</style>
