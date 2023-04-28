import { destroyCookie } from 'nookies';

export default async (req, res) => {

    destroyCookie({res}, "token", {
        path: "/",
    });

    //In server-side add the path and domain:
    //nookies.destroy(req , 'cookie_name' , {path: '/' , domain: 'mydomain.com'})

    //redirect to login page
    res.writeHead(302, {Location: '/login'});
    res.end();
};