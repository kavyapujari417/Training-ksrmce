import {BrowserRouter,Routes,Route} from "react-router-dom";
import Landing from "../Landing/Landing";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Products from "../Products/Products";
import Buy from "../Buy/Buy";
import Footer from "../Footer/Footer";
function Link(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/home" element={<>
            <Navbar/> <Home/> </>}></Route>
            <Route path="/products" element={<>
            <Navbar/> <Products/></>}></Route>
            <Route path="/buy" element={<><Navbar/><Buy/></>}></Route>
            <Route path="/contact" element={<><Navbar/><Contact/></>}></Route>
            <Route path="/about" element={<><Navbar/><About/></>}></Route>
            <Route path="/footer" element={<Footer/>}></Route>
        
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default Link;