import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";

const Blog = ()=>{
    const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/posts');

    let [searchParams, setSearchParams] = useSearchParams()

    if(loading) return <p>Loading ...</p>
    if(error) return <p>Error....</p>

    const handleChange = (e)=>{
        let filter = e.target.value
        if (filter) {
            setSearchParams({ filter });
        } else {
            setSearchParams({});
        }
    }
    
    return (
        <>
            <h1>Blog</h1>
            <input type="text" name="input-search" 
            value={searchParams.get("filter") || ""}
            className="form-control my-3"  
            onChange={handleChange}/>
            <ul className="list-group">
                {
                    data
                    .filter((item) => {
                        let filter = searchParams.get("filter");
                        if (!filter) return true;
                        let name = item.title.toLowerCase();
                        return name.startsWith(filter.toLowerCase());
                      })                    
                    .map(post =>(
                        <Link to={`/blog/${post.id}`} key={post.id} className="list-group-item">{post.title}</Link>

                    ))
                }
            </ul>        
        </>
    )
}

export default Blog;