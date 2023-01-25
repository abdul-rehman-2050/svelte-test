<script>
	import { applyAction, enhance } from '$app/forms';
	//import Fa from 'svelte-fa'
	//import faGoogle from '@fortawesome/free-brands-svg-icons'

	import { toastFailure, toastSuccess } from '../toast-themes';
	let isSubmitting = false
	
	const submitEmployee = () => {
		isSubmitting =true;
		return async ({ result }) => {
			await applyAction(result);
			if (result.type === 'redirect') {
				toastSuccess('Succesfully Added!');
			} else if (result.type === 'failure') {
				toastFailure(result.data?.message);
			}
			isSubmitting = false;
		};
	};
	//export let users;

</script>

<div class=" m-auto">
	<div class="card-form">
		<div class="my-3">
			<h1 class="h1-form">Add Employee</h1>
		</div>
		<hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
		<form method="POST" action="/admin/emp?/addemp" use:enhance={submitEmployee}>
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
						<option value="User" selected>User</option>
						<option value="Administrator">Administrator</option>
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
						class="input-form2 invalid:border-pink-500 invalid:text-red-100
						focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
						name="email"
						id="email"
						placeholder="Email address"
						required
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
        ease-in-out
		disabled:bg-slate-500 disabled:text-slate-50 disabled:border-slate-200 disabled:shadow-none
      
		"
		disabled={isSubmitting}
		>Add New User</button
			>
		</form>
	</div>
</div>
