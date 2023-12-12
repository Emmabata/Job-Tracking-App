import logoImg from '../assets/images/logo.jpg';

const Logo = () => {
    return (
        <img 
            src={logoImg} 
            alt='job-img' 
            className='logo'
        />
    );
}

export default Logo;