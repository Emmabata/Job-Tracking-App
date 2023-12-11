import { Link } from "react-router-dom";

const Login = () => {
    return ( 
        <div>
            <h1>Login Page</h1>
            <h4>
                <Link to="/register">Register</Link>
            </h4>
        </div>
    );
}

export default Login;