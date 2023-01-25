/** @type {import('./$types').Actions} */
import { fail,redirect } from '@sveltejs/kit';



export const actions = {
    addemp: async ({request,locals}) => {
        const data = await request.formData();        
        const fullName = data.get('fullname');
        const userGroup = data.get('usergroup');
        const storeID = data.get('storeslist');
        const email = data.get('email');
        const password = data.get('password');
        console.log('name:',fullName);
        console.log('group:',userGroup);
        console.log('storesList:',storeID);
        console.log('email:',email);
        console.log('password:',password);     
        
        
        const {data:dt,error:err } = await locals.sb.auth.admin.createUser({
          email: email,
          password: password,
          role:"employee",
          email_confirm: true,

          user_metadata: { 
            name: fullName,
            owner: locals.session.user.id,
            group: userGroup,
            sotre: storeID,            
           }
        })
        if (err) {
          return fail(400, {message: err.message});
      }
      console.log(dt)
      
      throw redirect(303, '/sdash')
  },


	
};