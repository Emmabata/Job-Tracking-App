import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';
import logo from '../assets/images/logo.jpg';
import main from '../assets/images/avatar-3.jpg';
import { Link } from 'react-router-dom';


const Landing = () => {
    return ( 
        <Wrapper>
            <nav>
        <img 
        src={logo} 
        alt="logo" 
        className='logo'
        />
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>
                        Job <span>tracking</span> app
                    </h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur delectus id, dolore earum veniam tenetur ab quo neque. Quod placeat provident neque optio veniam aut?
                    </p>
                    <Link to="/register" className="btn register-link">Register</Link>
                    <Link to="/Login" className="btn login-link">Login</Link>
                </div>
                <img 
                src={main} 
                alt="job-hunt" 
                className='img main-img'
                />
            </div>
        </Wrapper>
    );
}

export default Landing;