import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div>
            <h1>Register page</h1>
            <h4>
                <Link to="/login">Login</Link>
            </h4>
        </div>
    );
}

export default Register;