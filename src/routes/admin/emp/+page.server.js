/** @type {import('./$types').Actions} */
export const actions = {

    addemp: async ({request}) => {
        const data = await request.formData();        
        const fullName = data.get('fullname');
        const userGroup = data.get('usergroup');
        const storeList = data.get('storeslist');
        const email = data.get('email');
        const password = data.get('password');
        console.log('name:',fullName);
        console.log('group:',userGroup);
        console.log('storesList:',storeList);
        console.log('email:',email);
        console.log('password:',password);



        
  },
	
};