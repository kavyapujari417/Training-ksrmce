import { Link } from "react-router-dom";
import "./Register.css";
import Footer from "../Footer/Footer";
function Register() {
  return (
    <>
    <form>
      <h2>Register</h2>

      <input type="text" placeholder="Username" />
      <br /><br />

      <input type="email" placeholder="Email" />
      <br /><br />

      <input type="password" placeholder="Password" />
      <br /><br />
      <Link to="/Login"><button type="submit">Register</button>
      </Link>
    </form>
    
    </>
  );
}

export default Register;
