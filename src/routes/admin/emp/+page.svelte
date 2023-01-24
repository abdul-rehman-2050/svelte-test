<div class="min-w-full">
	<div class=" m-auto">
		<div class="card-form">
			<div class="my-3">
				<h1 class="h1-form">Add Employee</h1>
			</div>
			<hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
			<form>
				<div class="form-row">
					<div class="mb-6">
						<label for="fullname" class="label-form">Full Name</label>
						<input
							type="text"
							class="input-form2"
							id="fullname"
							aria-describedby="emailHelp123"
							placeholder="Full Name"
						/>
					</div>
					<div class="mb-6">
						<label for="usertype" class="label-form">Select Group</label>
						<select
							id="usertype"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						>
							<option value="user" selected>User</option>
							<option value="admin">Administrator</option>
						</select>
					</div>
				</div>
				<div class="form-row">
					<div class=" mb-6">
						<label for="email" class="label-form">Email</label>
						<input type="email" class="input-form2" id="email" placeholder="Email address" />
					</div>
					<div class="mb-6">
						<label for="userpassword" class="label-form">Password</label>
						<input
							type="password"
							class="input-form2
              "
							id="userpassword"
							placeholder="Password"
						/>
					</div>
					<div class="form-row">
						<label class="block text-left" style="max-width: 300px">
							<label class="label-form" for="storesallowed">Allowed Stores</label>
							<select
								id="storesallowed"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								multiple
							>
								<option>Store 1</option>
								<option>Store 2</option>
								<option>Store 3</option>
								<option>Store 4</option>
								<option>Stores 5</option>
							</select>
						</label>
					</div>
				</div>
				<hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
				<button
					type="submit"
					class="
            w-full
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out">Add New User</button
				>
			</form>
		</div>
	</div>
	<div id="last-users">
		<h1 class="font-bold py-4 uppercase">Last 24h users</h1>
		<div class="overflow-x-scroll">
			<table class="w-full whitespace-nowrap">
				<thead class="bg-black/60">
					<th class="text-left py-3 px-2 rounded-l-lg">Name</th>
					<th class="text-left py-3 px-2">Email</th>
					<th class="text-left py-3 px-2">Group</th>
					<th class="text-left py-3 px-2">Status</th>
					<th class="text-left py-3 px-2 rounded-r-lg">Actions</th>
				</thead>
				<tr class="border-b border-gray-700">
					<td class="py-3 px-2 font-bold">
						<div class="inline-flex space-x-3 items-center">
							<span>Thai Mei</span>
						</div>
					</td>
					<td class="py-3 px-2">thai.mei@abc.com</td>
					<td class="py-3 px-2">User</td>
					<td class="py-3 px-2">Approved</td>
					<td class="py-3 px-2">
						<div class="inline-flex items-center space-x-3">
							<a href="" title="Edit" class="hover:text-white"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-5 h-5"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
									/>
								</svg>
							</a>
							<a href="" title="Edit password" class="hover:text-white"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-5 h-5"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
									/>
								</svg>
							</a>
							<a href="" title="Suspend user" class="hover:text-white"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-5 h-5"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
									/>
								</svg>
							</a>
						</div>
					</td>
				</tr>
				<tr class="border-b border-gray-700">
					<td class="py-3 px-2 font-bold">
						<div class="inline-flex space-x-3 items-center">
							<span>Thai Mei</span>
						</div>
					</td>
					<td class="py-3 px-2">thai.mei@abc.com</td>
					<td class="py-3 px-2">User</td>
					<td class="py-3 px-2">Approved</td>
					<td class="py-3 px-2">
						<div class="inline-flex items-center space-x-3">
							<a href="" title="Edit" class="hover:text-white"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-5 h-5"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
									/>
								</svg>
							</a>
							<a href="" title="Edit password" class="hover:text-white"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-5 h-5"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
									/>
								</svg>
							</a>
							<a href="" title="Suspend user" class="hover:text-white"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-5 h-5"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
									/>
								</svg>
							</a>
						</div>
					</td>
				</tr>
				<tr class="border-b border-gray-700">
					<td class="py-3 px-2 font-bold">
						<div class="inline-flex space-x-3 items-center">
							{#if false}
								<span
									><img
										class="rounded-full w-8 h-8"
										src="https://images.generated.photos/tGiLEDiAbS6NdHAXAjCfpKoW05x2nq70NGmxjxzT5aU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTM4ODM1LmpwZw.jpg"
										alt=""
									/></span
								>
							{/if}
							<span>Thai Mei</span>
						</div>
					</td>
					<td class="py-3 px-2">thai.mei@abc.com</td>
					<td class="py-3 px-2">User</td>
					<td class="py-3 px-2">Approved</td>
					<td class="py-3 px-2">
						<div class="inline-flex items-center space-x-3">
							<a href="" title="Edit" class="hover:text-white"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-5 h-5"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
									/>
								</svg>
							</a>
							<a href="" title="Edit password" class="hover:text-white"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-5 h-5"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
									/>
								</svg>
							</a>
							<a href="" title="Suspend user" class="hover:text-white"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-5 h-5"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
									/>
								</svg>
							</a>
						</div>
					</td>
				</tr>
				<tr class="border-b border-gray-700">
					<td class="py-3 px-2 font-bold">
						<div class="inline-flex space-x-3 items-center">
							{#if false}
								<span
									><img
										class="rounded-full w-8 h-8"
										src="https://images.generated.photos/niCVbIBAm4hahzwS83HoEtcVEIactkKohOzgXWYY4lM/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTk4ODczLmpwZw.jpg"
										alt=""
									/></span
								>
							{/if}
							<span>Marquez Spineli</span>
						</div>
					</td>
					<td class="py-3 px-2">marquez.spineli@cba.com</td>
					<td class="py-3 px-2">User</td>
					<td class="py-3 px-2">Approved</td>
					<td class="py-3 px-2">
						<div class="inline-flex items-center space-x-3">
							<a href="" title="Edit" class="hover:text-white"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-5 h-5"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
									/>
								</svg>
							</a>
							<a href="" title="Edit password" class="hover:text-white"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-5 h-5"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
									/>
								</svg>
							</a>
							<a href="" title="Suspend user" class="hover:text-white"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-5 h-5"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
									/>
								</svg>
							</a>
						</div>
					</td>
				</tr>
				<tr class="border-b border-gray-800">
					<td class="py-3 px-2 font-bold">
						<div class="inline-flex space-x-3 items-center">
							<span>Mark Spike</span>
						</div>
					</td>
					<td class="py-3 px-2">mark.spike@abc.com</td>
					<td class="py-3 px-2">Administrator</td>
					<td class="py-3 px-2">Approved</td>
					<td class="py-3 px-2">
						<div class="inline-flex items-center space-x-3">
							<a href="" title="Edit" class="hover:text-white"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-5 h-5"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
									/>
								</svg>
							</a>
							<a href="" title="Edit password" class="hover:text-white"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-5 h-5"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
									/>
								</svg>
							</a>
							<a href="" title="Suspend user" class="hover:text-white"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-5 h-5"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
									/>
								</svg>
							</a>
						</div>
					</td>
				</tr>
			</table>
		</div>
	</div>
</div>
