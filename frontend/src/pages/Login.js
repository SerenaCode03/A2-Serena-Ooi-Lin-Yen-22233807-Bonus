import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Login.css';

function Login(){
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    async function loginUser(e){
        e.preventDefault();
        console.log("Login button clicked");

        try {
            const response = await fetch('http://localhost/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });
    
            console.log("Response received:", response);
    
            const data = await response.json();
            console.log("Data received:", data);
    
            if (response.ok) {
                navigate('/HomePage');
            } else {
                setErrorMessage(data.message || 'Login failed');
                setTimeout(() => {
                    setErrorMessage('');
                }, 2000);
            }
        } catch (error) {
            console.error("Error during login:", error); 
            setErrorMessage('An error occurred during login. Please try again.');
            setTimeout(() => {
                setErrorMessage('');
            }, 2000);
        }
    }

    return(
        <div className='login-page'>
            <p className='welcome-text'>Welcome back !</p>
            <form className = 'login-user'onSubmit={loginUser}>
                <div className='username-container'>
                    <img src="/assets/prime_user.svg" className="user-icon"/>
                    <input 
                        type="text" 
                        placeholder="Username" 
                        className='username-input' 
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />
                </div>
                <div className='password-container'>
                    <img src="/assets/mdi_password-outline.svg" className="password-icon"/>
                    <input
                        type="text" 
                        placeholder="Password" 
                        className='password-input'
                        onChange={(e) => setPassword(e.target.value)}
                        value = {password}
                    />
                </div>
                <button className='login-button' type='submit'>
                    Login
                </button>
            </form>
            <p className='signup-link' onClick={()=>navigate('/SignUpPage')}>
                Don't have an account?
            </p>
            {errorMessage && (
                <div className='error-msg-container'>
                    <p className='error-message'>{errorMessage}</p>
                </div>
            )}
        </div>
    );
}
export default Login;