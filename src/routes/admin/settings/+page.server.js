import { fail, redirect } from "@sveltejs/kit";


export const actions = {
    changePassword: async ({ request,locals }) => {
      const data = await request.formData();
      
      const password = data.get('password');
      const confirmPassword = data.get('confirm_password');
      if ( password !== confirmPassword) {
        return fail(400, {message: "Password did not matched"});
        }

       /* const { error: err} = await locals.sb.auth.updateUser({
            
            password: password 
        });
        */

        const {  error:err } = await locals.sb.auth.updateUser({password: password})
        if (err) {
            return fail(400, {message: err.message});
        }
        throw redirect(303, '/sdash')
    },
   
  };