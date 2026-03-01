import { Link } from "react-router-dom";
import "./Landing.css";
import Footer from "../Footer/Footer";

function Landing() {
  return (
    <>
    <div className="back">
      <div className="header">
        <div className="logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkIzjjO9hVDx7E3oZ7UpQMX_u4W7HND5LCnQ&s"/>
          <h1>Kavya Fashions</h1>
        </div>
        <div className="buttons">
          <Link to="/Login">
            <button>Login</button>
          </Link>
          <Link to="/Register">
            <button>Register</button>
          </Link>
        </div>
      </div>
      <div className="landing">
        <div className="landing-text">
          <h1>Welcome to Kavya Fashions</h1>
          <p>
            Kavya Fashions is your destination for elegant and stylish clothing that blends traditional charm with modern fashion.
          </p>
          <p>
            Discover beautifully crafted designs made with quality fabrics, perfect for everyday wear, festive occasions, and special moments.
          </p>
          <p>
            Login or register to explore our latest collections and experience fashion that reflects confidence, comfort, and grace.
          </p>
        </div>
        <div className="landing-image">
          <img src="https://kavyafashiontech.com/wp-content/uploads/2024/09/Screenshot-2024-09-17-133943.png" />
        </div>
      </div>
    </div>
    <Footer />
    </>

  );
}

export default Landing;
