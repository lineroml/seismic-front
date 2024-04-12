
export default function Card(seismicItem) {

	return (
		<div class="py-8 px-4 lg:w-1/3">
			<div class="h-full flex items-start">
				<div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
					<span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
					<span class="font-medium text-lg text-gray-800 title-font leading-none mb-10">18</span>

					<span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
						<svg class="w-5 h-5 mx-3" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
							<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
						</svg>
					</span>
					<span class="font-medium text-lg text-gray-800 title-font leading-none">18</span>
				</div>
				<div class="flex-grow pl-6">
					<h2 class="tracking-widest text-xs title-font font-medium text-yellow-500 mb-1">CATEGORY</h2>
					<h1 class="title-font text-xl font-medium text-gray-900 mb-3">Neptune</h1>
					<p class="leading-relaxed mb-5">Photo booth fam kinfolk cold-pressed sriracha leggings.</p>
					<a class="inline-flex items-center">
						<span class="flex-grow flex flex-col">
							<span class="title-font font-medium text-gray-900">Henry Letham</span>
						</span>
					</a>
				</div>
			</div>
		</div>
	)

}