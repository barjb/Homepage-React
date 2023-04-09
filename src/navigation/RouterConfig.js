import App from '../App';
import Contact from '../pages/Contact/Contact'
import Post from '../pages/Post/Post'
import Projects from '../pages/Projects/Projects'
import Editor from '../pages/Editor/Editor'
import Login from '../pages/Login/Login'
import {
    createBrowserRouter, Navigate, Outlet
} from 'react-router-dom';
import { useCookies } from 'react-cookie';
const PrivateRoutes = () => {
    const [cookies] = useCookies('access_token');
    return (
        cookies ? <Outlet /> : <Navigate to='/' />
    )
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/contact',
        element: <Contact />
    },
    {
        path: '/post/:id',
        element: <Post />
    },
    {
        path: '/projects',
        element: <Projects />
    },
    {
        element: <PrivateRoutes />,
        children: [
            {
                element: <Editor />,
                path: '/editor'
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    }
]);
export default router;