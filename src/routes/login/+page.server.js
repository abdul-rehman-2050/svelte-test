import { fail, redirect } from "@sveltejs/kit";


export const actions = {
    login: async ({request, locals}) => {        
        const formData = await request.formData();
        const email = formData.get('email');
        const password = formData.get('password');

        if (!email || !password) return fail(400, {message: 'Please fill in the missing fields' });

        const { error: err} = await locals.sb.auth.signInWithPassword({
            email: email ,
            password: password 
        });

        if (err) {
            return fail(400, {message: err.message});
        }
        
        throw redirect(303, '/sdash')
    }
}