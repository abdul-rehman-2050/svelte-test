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


        /*
        console.log('name:',fullName);
        console.log('group:',userGroup);
        console.log('storesList:',storeID);
        console.log('email:',email);
        console.log('password:',password);     
        */
        const userLimit = locals.session?.user?.user_metadata.sub_users_limit;
        const { data: { users }, error } = await locals.sb.auth.admin.listUsers();
        if(error){
          return fail(400, {message: error.message});
        }

        var myEmployees = users.filter((user)=>{
          return (user.role==="employee") && (user.user_metadata.owner===locals.session.user.id) 
      } );
        console.log(myEmployees.length)

        if(myEmployees.length>=userLimit){
          return fail(400, {message: "Your cannot create more users"});
        }
        //const storesLimit = locals.session?.user?.user_metadata.stores_limit;
        console.log(locals.session.user.user_metadata)
        
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
            id_active:true,          
           }
        })
        if (err) {
          return fail(400, {message: err.message});
      }
      console.log(dt)
      
      throw redirect(303, '/sdash')
  },


	
};