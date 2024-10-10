import '../styles/landingPage.css';

function landingPage(){
    return(
        <div className='page'>
            <div className='image-section'>
                <img src="/assets/istockphoto-1336490738-612x612.jpg" alt='Landing image'/>
            </div>
            <div className='text-section'>
                <h1>Z-Habit</h1>
                <p>Your personal habit tracker...</p>
                <button className='start-button'>
                    Get Started
                    <img src="/assets/maki_arrow.svg" alt='arrow' className='arrow-icon'/>
                </button>
            </div>
        </div>
    )
}

export default landingPage;