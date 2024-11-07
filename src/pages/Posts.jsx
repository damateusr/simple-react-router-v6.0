import { useLoaderData } from "react-router-dom"

const Posts = () =>{

    const {post} = useLoaderData()

    return (
        <>
            <h1>{post.id} - {post.title}</h1>
            <p>{post.body}</p>
        </>
    )
}

export default Posts

export const loaderPost = async({params}) =>{
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    if(!resp.ok) throw (
        {
            status: resp.status,
            statusText: "No Encontrado"
        }
    )
    const post = await resp.json();
    return {post}

}