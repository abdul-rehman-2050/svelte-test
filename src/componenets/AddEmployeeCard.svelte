<script>
	
</script>

<div class=" m-auto">
	<div class="card-form">
		<div class="my-3">
			<h1 class="h1-form">Add Employee</h1>
		</div>
		<hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
		<form method="POST" action="/admin/emp?/addemp">
			<div class="form-row-3">
				<div class="mb-6">
					<label for="fullname" class="label-form">Full Name</label>
					<input
						type="text"
						class="input-form2"
						id="fullname"
						aria-describedby="emailHelp123"
						placeholder="Full Name"
						name="fullname"
					/>
				</div>
				<div class="mb-6">
					<label for="usertype" class="label-form">Group</label>
					<select
						name="usergroup"
						id="usertype"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					>
						<option value="user" selected>User</option>
						<option value="admin">Administrator</option>
					</select>
				</div>
                <div class="mb-6">
                    <label class="label-form"
                     for="storesallowed">
                     Allowed Store</label>
                    <select
                        id="storesallowed"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        
                        name="storeslist"
                    >
                        <option value="203">Store 1</option>
                        <option value="204">Store 2</option>
                        <option value="205">Store 3</option>
                        <option value="206">Store 4</option>
                        <option value="207">Stores 5</option>
                    </select>
                </div>
			</div>
			<div class="grid grid-flow-row gap-4">
				<div class=" mb-6">
					<label for="email" class="label-form">Email</label>
					<input
						type="email"
						class="input-form2"
						name="email"
						id="email"
						placeholder="Email address"
					/>
				</div>
				<div class="mb-6">
					<label for="userpassword" class="label-form">Password</label>
					<input
						type="password"
						class="input-form2"
						name="password"
						id="userpassword"
						placeholder="Password"
					/>
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
