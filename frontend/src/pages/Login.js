import '../styles/Login.css';

function Login(){
    return(
        <div className='login-page'>
            <p className='welcome-text'>Welcome back !</p>
            <div className='username-container'>
                <img src="/assets/prime_user.svg" className="user-icon"/>
                <input type="text" placeholder="Username" className='username-input' />
            </div>
            <div className='password-container'>
                <img src="/assets/mdi_password-outline.svg" className="password-icon"/>
                <input type="text" placeholder="Password" className='password-input' />
            </div>
            <button className='login-button'>
                Login
            </button>
            <p className='signup-link'>Don't have an account?</p>
        </div>
    );
}
export default Login;