import { Link, useRouteError } from "react-router-dom";

const NotFoundV2 = ()=>{

    const error = useRouteError();
    console.log(error)
    return (
        <div>
        <h1>404</h1>
        <p>Page not found</p>
        <p>{error.statusText || error.message}</p>
        <Link to="/">Volver al Home</Link>
        </div>
    )
}

export default NotFoundV2