import { useNavigate } from 'react-router-dom';
import '../styles/Landing.css';

function Landing(){
    const navigate = useNavigate();
    return(
        <div className='page'>
            <div className='image-section'>
                <img src="/assets/istockphoto-1336490738-612x612.jpg" alt='Landing image'/>
            </div>
            <div className='text-section'>
                <h1>Z-Habit</h1>
                <p>Your personal habit tracker...</p>
                <button className='start-button'onClick={()=> navigate('/LoginPage')}>
                    Get Started
                    <img src="/assets/maki_arrow.svg" alt='arrow' className='arrow-icon'/>
                </button>
            </div>
        </div>
    )
}
export default Landing;