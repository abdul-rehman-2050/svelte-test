<script>
	import AddEmployeeCard from '../../../componenets/AddEmployeeCard.svelte';
	import BucketSvg from '../../../svgs/BucketSVG.svelte';
	import EditSvg from '../../../svgs/EditSVG.svelte';
	import { applyAction, enhance } from '$app/forms';
	import { Button, Modal,TextInput,
	PasswordInput,
	} from 'carbon-components-svelte';
	import {
    Form,
    FormGroup,
    Checkbox,
    RadioButtonGroup,
    RadioButton,
    Select,
    SelectItem,
    
  } from "carbon-components-svelte";
	//import Fa from 'svelte-fa'
	//import faGoogle from '@fortawesome/free-brands-svg-icons'

	import { toastFailure, toastSuccess } from '../../../toast-themes';
	import TestForm from '../../../componenets/MyForms/TestForm.svelte';
	
	let isSubmitting = false;
	let showModal = false;

	const dellEmployee = () => {
		isSubmitting = true;
		return async ({ result }) => {
			await applyAction(result);
			if (result.type === 'redirect') {
				toastSuccess('Succesfully Deleted');
			} else if (result.type === 'failure') {
				toastFailure(result.data?.message);
			}
			isSubmitting = false;
		};
	};

	export let data;
	let open = false;
</script>

<div class="min-w-full">
	<div>
		<Button on:click={() => (open = true)}>Create database</Button>
		
<Modal
  bind:open
  modalHeading="Update User"
  primaryButtonText="Update"
  secondaryButtonText="Cancel"
  on:click:button--secondary={() => (open = false)}
  on:open
  on:close
  on:submit
>
<TestForm/>
</Modal>
	</div>
	{#if data.users.limit > data.users.createdLength}
	
		<AddEmployeeCard />
		
	{:else}
		<div role="alert" class="mb-3">
			<div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">Limit Reached</div>
			<div class="border border-t-0 border-red-700 rounded-b bg-red-700 px-4 py-3 text-red-100">
				<p>
					You can only have {data.users.limit} Employees. Please delete some to make room for new.
				</p>
			</div>
		</div>
	{/if}

	<div id="last-users">
		<h1 class="font-bold py-4 uppercase">Employees List2</h1>
		<div class="overflow-x-scroll">
			<table class="w-full whitespace-nowrap">
				<thead class="bg-black/60">
					<th class="text-left py-3 px-2 rounded-l-lg">Name</th>
					<th class="text-left py-3 px-2">Email</th>
					<th class="text-left py-3 px-2">Group</th>
					<th class="text-left py-3 px-2">Status</th>
					<th class="text-left py-3 px-2 rounded-r-lg">Actions</th>
				</thead>
				{#each data.users.allEmployees as employee}
					<tr class="border-b border-gray-700">
						<td class="py-3 px-2 font-bold">
							<div class="inline-flex space-x-3 items-center">
								<span><img class="rounded-full w-8 h-8" src="/userprofile.png" alt="" /></span>
								<span>{employee.user_metadata.name}</span>
							</div>
						</td>
						<td class="py-3 px-2">{employee.email}</td>
						<td class="py-3 px-2">{employee.user_metadata.group}</td>
						<td class="py-3 px-2">{employee.user_metadata.id_active ? 'Approved' : 'Suspended'}</td>
						<td class="py-3 px-2">
							<div class="inline-flex items-center space-x-3">
								<form>
									<input name="userid" value={employee.id} type="hidden" />

									<button title="Edit" class="hover:text-white" type="submit">
										<EditSvg />
									</button>
								</form>
								<form method="POST" action="?/delluser" use:enhance={dellEmployee}>
									<input name="userid" value={employee.id} type="hidden" />
									<button type="submit" title="Delete user" class="hover:text-white">
										<BucketSvg />
									</button>
								</form>
							</div>
						</td>
					</tr>
				{/each}
			</table>
		</div>
	</div>
</div>
