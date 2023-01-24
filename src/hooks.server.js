import '$lib/db';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { sequence } from '@sveltejs/kit/hooks';


// Function to prevent users landing on the root page '/' which doesnt specify where they are unlike '/home'
export const redirectToHome = (async ({ event, resolve }) => {
    const url = new URL(event.request.url);
    if (url.pathname==='/') {
        url.pathname = '/home'
        return Response.redirect(url.toString(), 302)
    }
    return await resolve(event);
}) ;


export const handleAuth  = async ({ event, resolve }) => {
    const { session, supabaseClient } = await getSupabase(event);
    event.locals.sb = supabaseClient;
    event.locals.session = session;
    return resolve(event);
};

export const handleAuthRouting = (async ({ event, resolve }) => {
    const url = new URL(event.request.url);
    const loggedIn = event.locals.session;
    //const cur_url = url.pathname.substr(url.pathname.lastIndexOf('/'))
    if(loggedIn && event.locals.session.user.role=="store_owner" && (url.pathname.indexOf("/admin")<0)){
        url.pathname = '/admin'
        return Response.redirect(url.toString(), 302)
    }
    else if (loggedIn && (url.pathname==='/login' || url.pathname==='/register')) {
        url.pathname = '/home'
        return Response.redirect(url.toString(), 302)
    }
    else if (!loggedIn && (url.pathname==='/account' || url.pathname==='/sdash'||url.pathname==='/admin')) {
        url.pathname = '/login'
        return Response.redirect(url.toString(), 302)
    }
    return resolve(event);
});
export const handle= sequence(redirectToHome,handleAuth, handleAuthRouting)