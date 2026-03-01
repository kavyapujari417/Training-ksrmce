import { Link } from "react-router-dom";
import "./Login.css";
import Footer from "../Footer/Footer";

function Login(){
    return(
        <>
        <div className="login">
      <h1>Login</h1>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <Link to="/home"><button>Login</button></Link>{" "}
      <Link to="/Register">
          <button>New User?</button>
          </Link> 
    </div>
        </>
    )
}
export default Login;
