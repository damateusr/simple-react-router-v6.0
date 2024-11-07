import { Link, useLoaderData } from "react-router-dom";

const BlogV2 =()=>{

    const {posts} = useLoaderData();

    return (
        <ul>
            {posts.length > 0 ? (
                posts.map((blog) => (
                    <li key={blog.id}>
                        <Link to={`/post/${blog.id}`}>{blog.title}</Link>
                    </li>
                ))
            ) : (
                <li>No posts found</li>
            )}
        </ul>
    )
}

export default BlogV2;

export const loaderBlog = async ()=>{
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
    if(!resp.ok) throw (
        {
            status: resp.status,
            statusText: "No Encontrado"
        }
    )
    const posts = await resp.json();
    return {posts}
}