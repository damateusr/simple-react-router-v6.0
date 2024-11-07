import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import BlogV2, { loaderBlog } from "../pages/BlogV2";
import NotFoundV2 from "../pages/NotFoundV2";
import LayoutPublicV2 from "../layouts/LayoutPublicV2";
import Posts, { loaderPost } from "../pages/Posts";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPublicV2/>,
        errorElement: <NotFoundV2/>,
        children: [
            {
                errorElement:<NotFoundV2/>,
                children:[
                    {
                        index: true,
                        element: <Home/>,
                    },
                    {
                        path: '/about',
                        element: <About/>,
                    },
                    {
                        path: '/blog',
                        element: <BlogV2/>,
                        loader: loaderBlog
                    },
                    {
                        path: '/post/:id',
                        element: <Posts/>,
                        loader: loaderPost
                    }
                ]
            },
        ]
    },

])