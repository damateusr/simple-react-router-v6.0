import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Blog from "./pages/Blog";
import LayoutPublic from "./layouts/LayoutPublic";
import NotFound from "./pages/NotFounf";
import BlogDetail from "./pages/BlogDetail";

const App = ()=>{
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LayoutPublic/>}>
          <Route element={<Inicio/>} index></Route>
          <Route element={<Contacto/>} path="/contactos"></Route>
          <Route element={<Blog/>} path="/blog"></Route>
          <Route element={<BlogDetail/>} path="/blog/:id"></Route>
        </Route>
        
        <Route element={<NotFound/>} path="*"></Route>
      </Routes>

    </>
  );
}

export default App;