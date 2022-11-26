import About from '../Page/About';
import Home from '../Page/Home';
import Contact from '../Page/Contact';
import Logout from '../Page/LogOut';
import Write from '../Page/Write';
import MainPost from '../Page/MainPost';
import LogIn from '../Page/LogIn';
const publicRoutes = [
    { path: '/', component: <Home /> },
    { path: '/about', component: <About /> },

    { path: '/contact', component: <Contact /> },
    { path: '/logout', component: <Logout /> },
    { path: '/write', component: <Write /> },
    { path: '/post/abc', component: <MainPost /> },
    { path: '/login', component: <LogIn /> },
];
export { publicRoutes };
