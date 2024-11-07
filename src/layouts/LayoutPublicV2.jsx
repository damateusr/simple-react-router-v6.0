import { Outlet, useNavigation } from "react-router-dom"
import NavbarV2 from "../components/NavbarV2"

const LayoutPublicV2 =()=>{

    const navigation = useNavigation();

    return (
        <>
        <NavbarV2/>
         <main className="container">
            {navigation.state === "loading" && (
                <div className="alert alert-info my-5">Loading...</div>
            )}
            <Outlet/>
         </main>
         <footer className="container text-center">Footer</footer>
        </>
    )
}

export default LayoutPublicV2