import '../styles/Login.css';

function SignUpPage(){

    return(
        <div className='signup-page'>
            <p className='signup-text'>Sign up</p>
            <div className='username-container'>
                <img src="/assets/prime_user.svg" className="user-icon"/>
                <input type="text" placeholder="Username" className='username-input' />
            </div>
            <div className='email-container'>
                <img src="/assets/ic_outline-email.svg" className="email-icon"/>
                <input type="text" placeholder="Email" className='email-input' />
            </div>
            <div className='password-container'>
                <img src="/assets/mdi_password-outline.svg" className="password-icon"/>
                <input type="text" placeholder="Password" className='password-input' />
            </div>
            <button className='signup-button'>
                Sign up
            </button>
        </div>
    );
}
export default SignUpPage;