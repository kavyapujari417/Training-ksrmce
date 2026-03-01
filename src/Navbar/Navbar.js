import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar(){
    return(
        <>
        <div className="div">
            <div className="logo">
        
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkIzjjO9hVDx7E3oZ7UpQMX_u4W7HND5LCnQ&s" height={70}></img>
            <h1>Kavya Fashions</h1>
            </div>
        <div className="cloth">
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/buy">Buy</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </div>
        </div>
        </>
    )
}
export default Navbar;