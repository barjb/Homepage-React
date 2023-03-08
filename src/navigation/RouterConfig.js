import App from '../App';
import Contact from '../pages/Contact/Contact'
import Post from '../pages/Post/Post'
import Projects from '../pages/Projects/Projects'
import Editor from '../pages/Editor/Editor'
import {
    createBrowserRouter,
} from 'react-router-dom';


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
        path: '/editor',
        element: <Editor />
    },
]);
export default router;