<script lang="ts">
	import { filter as filterStore } from '../../../../store'
	import type { IFilter } from './filter.interface'

	export let filter: IFilter

	let isActive = false

	filterStore.subscribe(value => {
		isActive = value.currentFilter === filter.categories
	})
</script>

<button
	class:active={isActive}
	class="filter"
	on:click={() => {
		$filterStore.currentFilter =
			$filterStore.currentFilter === filter.categories ? '' : filter.categories
	}}
>
	<span class="icon" style="background-color: {filter.color};">
		<img src={filter.icon} alt="" width="30" />
	</span>
	<span class="name">
		{filter.name}
	</span>
</button>

<style lang="scss">
	.filter {
		@apply text-center bg-white rounded-3xl p-2;
		width: 4.5rem;
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05);

		&.active {
			@apply bg-slate-500;
		}

		.icon {
			@apply rounded-3xl flex items-center justify-center p-3;
		}

		.name {
			@apply mt-1 block;
			font-size: 12px;
		}
	}
</style>
