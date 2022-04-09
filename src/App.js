export default function App() {
	return (
		<body>
			<section class="pt-20 ml-5 mr-5 lg:pt-36">
				<div class="container">
					<div class="flex lg:text-center">
						<div class="w-full text-center px-4 lg:justify-center">
							<h1 class="text-base font-semibold text-blue-500">Halo, Sugeng rawuh 👋</h1>
							<h2 class="font-semibold text-3xl mb-3 lg:text-4xl">Cari Kodeposmu</h2>
							<div class="mt-8 flex lg:justify-center lg:mt-15">
								<div class="input-group relative flex items-stretch w-full lg:w-6/12">
									<input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Ketik Nama Tempat, Kota atau Desa..." aria-label="Search" aria-describedby="button-addon2"></input>
									<button class="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out items-center" type="button" id="button-addon2">
										Cari
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="mt-3 ml-10 mr-10">
				<div class="container">
					<div class="flex flex-wrap lg:ml-90 lg:justify-center">
						<p class="font-semibold text-1">Hasil pencarian kodepos </p>
					</div>
				</div>
			</section>
			<section class="mt-3 ml-10 mr-10">
				<div class="container">
					<div class="flex flex-wrap lg:ml-90 lg:justify-center">
						<div class="flex flex-col">
							<div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
								<div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
									<div class="overflow-hidden">
										<table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
											<thead class="text-white">
												<tr class="bg-blue-600 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
													<th class="p-3 text-left">Provinsi</th>
													<th class="p-3 text-left">Kota/Kabupaten</th>
													<th class="p-3 text-left">Kecamatan</th>
													<th class="p-3 text-left">Kelurahan/Desa</th>
													<th class="p-3 text-left" width="110px">Kodepos</th>
												</tr>
											</thead>
											<tbody class="flex-1 sm:flex-none">
												<tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
													<td class="border-grey-light border hover:bg-gray-100 p-3">Jawa Tengah</td>
													<td class="border-grey-light border hover:bg-gray-100 p-3 truncate">Pemalang</td>
													<td class="border-grey-light border hover:bg-gray-100 p-3 truncate">Pulosari</td>
													<td class="border-grey-light border hover:bg-gray-100 p-3 truncate">Jurangmangu</td>
													<td class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer"></td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</body>
	)
}