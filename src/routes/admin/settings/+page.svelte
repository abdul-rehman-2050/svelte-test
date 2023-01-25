<script>
     /** @type {import('./$types').ActionData} */  
     import { toastFailure, toastSuccess } from '../../../toast-themes';
     export let form;

     if(form?.incorrect===true){
        toastFailure('Server Error:'+form?.message)
     }
     if(form?.success===true){
        toastSuccess('Password matched')
     }
</script>


<section class="w-full h-screen ">
	<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
		<div
			class="w-full p-6 bg-black/60 rounded-lg shadow dark:border md:mt-0 sm:max-w-md  dark:border-gray-700 sm:p-8"
		>
			<h2
				class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
			>
				Change Password
			</h2>
			<form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" method="POST" action="?/changePassword">
                
				<div>
					<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>New Password</label
					>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="••••••••"
						class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						required
					/>
				</div>
				<div>
					<label
						for="confirm-password"
						class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>Confirm password</label
					>
					<input
						type="password"
						name="confirm_password"
						id="confirm-password"
						placeholder="••••••••"
						class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						required
					/>
				</div>
                <div>{#if form?.incorrect}<p class="text-red-400">{form?.message}</p>{/if}</div>
				<button type="submit" class="w-full btn-primary mt-5">Reset passwod</button>
			</form>
		</div>
	</div>
</section>
