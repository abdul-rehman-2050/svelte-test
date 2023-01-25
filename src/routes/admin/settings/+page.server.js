import { fail } from '@sveltejs/kit';


export const actions = {
    changePassword: async ({ request,locals }) => {
      const data = await request.formData();
      
      const password = data.get('password');
      const confirmPassword = data.get('confirm_password');
      if ( password !== confirmPassword) {
        return fail(400, { message:"Password do not match"
        , incorrect: true });
        }

       /* const { error: err} = await locals.sb.auth.updateUser({
            
            password: password 
        });
        */

        const { data:dt, error:err } = await locals.sb.auth.updateUser({password: password})
        if (err) {
            return fail(400, {message: err.message});
        }
        else{
            console.log(dt)
        }
      return { success: true };
    },
   
  };