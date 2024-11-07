import { NavLink } from "react-router-dom"

const NavbarV2 = ()=>{

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <NavLink className="btn btn-outline-primary" to="/">Home</NavLink>
                <NavLink className="btn btn-outline-primary" to="/about">About</NavLink>
                <NavLink className="btn btn-outline-primary" to="/blog">Blog</NavLink>
            </div>
        </nav>
    )
}

export default NavbarV2