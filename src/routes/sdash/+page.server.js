
import { redirect } from '@sveltejs/kit'

/** @type {import('./$types').PageLoad} */
export const load =  (event) => {
    //console.log(event.locals.session)
    if(event.locals.session===null){
        throw redirect(303, '/');
    }
}