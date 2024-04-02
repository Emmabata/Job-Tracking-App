import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import Logo from "../Components/Logo";
import { FormRow } from "../Components";

const Register = () => {
    return (
        <Wrapper>

            <form className="form">
                <Logo />
                <h4>Register</h4>
                <FormRow type="text" name="name" labelText="name" defaultValue="Bata" />

                <FormRow type="text" name="LastName" labelText="last name" defaultValue="Smith" />

                <FormRow type="text" name="Location" defaultValue="country" />

                <FormRow type="email" name="email" defaultValue="uerEmail@gmail.com" />

                <FormRow type="password" name="password" defaultValue="BataSecret" />

                <button type="submit" className="btn btn-block">
                    <Link to="/login">Submit</Link>
                </button>

                <p>Already a member?
                    <Link to="/login" className="member-btn">Login</Link>
                </p>

            </form>
        </Wrapper>
    );
}

export default Register;