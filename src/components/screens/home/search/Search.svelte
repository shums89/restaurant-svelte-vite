<script lang="ts">
	import IoIosSearch from 'svelte-icons/io/IoIosSearch.svelte'
	import { filter } from '../../../../store.js'

	let term = ''

	const onKeyPress = e => {
		if (e.charCode === 13) {
			// filter.set({ searchTerm: term })
			$filter.searchTerm = term
		}
	}
</script>

<div class="search">
	<div class="icon">
		<IoIosSearch />
	</div>
	<input
		type="search"
		placeholder="Search..."
		bind:value={term}
		on:keypress={onKeyPress}
	/>
</div>

<style lang="scss">
	.search {
		@apply overflow-hidden bg-[#f0f0f0] rounded-3xl py-2 px-3.5 flex flex-row;

		.icon {
			@apply w-7 mr-2 text-[#bcbcc1];
		}

		input {
			@apply bg-transparent text-[#222];
			outline: none;
			border: none;

			&::placeholder {
				@apply font-light;
			}
		}
	}
</style>
