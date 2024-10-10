import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landing';
import LoginPage from './pages/Login';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';

function App() {
    
    return (
        <>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/LoginPage" element={<LoginPage />} />
                <Route path="/SignUpPage" element={<SignUpPage />} />
                <Route path="/HomePage" element={<HomePage />} />
            </Routes>
        </>
    );
}

export default App;