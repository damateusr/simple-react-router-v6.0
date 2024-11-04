import { Link, useParams, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const BlogDetail = ()=>{

    const params = useParams()

    const {data, loading, error} = useFetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

    if(loading) return <p>Loading ...</p>
    if(error) return <p>Error....</p>

    return(
        <>
            <h1>{data.id} - {data.title}</h1>

            <Link to="/blog"> Volver </Link>
        </>
    )
}

export default BlogDetail;