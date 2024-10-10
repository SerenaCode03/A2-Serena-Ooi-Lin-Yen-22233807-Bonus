import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

function SignUpPage({users, setUsers}){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signUpMessage, setSignUpMessage] = useState('');
    const navigate = useNavigate();

    async function createUser(e){
        e.preventDefault();

        const response = await fetch('http://localhost/api/users',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                email,
                password
            })
        });

        const data = await response.json();

        if(data.user_id){
            setUsers([...users, data]);
            setSignUpMessage('Sign up successful!');

            setTimeout(() => {
                setSignUpMessage('');
                navigate('/LoginPage');
            }, 2000);
        }
        setUsername('');
        setEmail('');
        setPassword('');
    }

    return(
        <div className='signup-page'>
            <p className='signup-text'>Sign up</p>
            <form className='create-user' onSubmit={createUser}>
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
                <div className='email-container'>
                    <img src="/assets/ic_outline-email.svg" className="email-icon"/>
                    <input 
                        type="text" 
                        placeholder="Email" 
                        className='email-input' 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
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
                <button className='signup-button' type='submit'>
                    Sign up
                </button>
                {signUpMessage && (
                    <div className='signup-msg-container'>
                        <p className='signup-message'>{signUpMessage}</p>
                    </div>
                )}
            </form>
        </div>
    );
}
export default SignUpPage;