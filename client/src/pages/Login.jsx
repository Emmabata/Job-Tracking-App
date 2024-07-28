import { Link, Form, redirect, useNavigation } from "react-router-dom";
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo } from "../Components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";


export const action = async ({ request }) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    try{
        await customFetch.post('/auth/login', data)
        toast.success('Login successful')
        return redirect('/dashboard')
    } catch(error) {
        toast.error(error?.response?.data?.msg);
        return error;
    }
};

const Login = () => {
    const navigation = useNavigation()
    const isSubmitting = navigation.state === "submitting"
    return ( 
        <Wrapper>
            <Form method="post" className="form">
                <Logo />
                <h4 style={{fontWeight:500}}>Login Biko</h4>
                <FormRow  type="email" name="email" defaultValue="uremail@biko.com" />

                <FormRow  type="password" name="password" defaultValue="yourpbiko" />

                <button type="submit" className="btn btn-block" disabled={isSubmitting} >
                    {isSubmitting ? "submitting" : "submit"}
                </button>

                <button type="button" className="btn btn-block" >
                    <Link to="/register">explore the app</Link>
                </button>
                <p>Not a member yet?
                    <Link to="/register" className="member-btn"> Register</Link>
                </p>
            </Form>
        </Wrapper>
    );
};

export default Login;