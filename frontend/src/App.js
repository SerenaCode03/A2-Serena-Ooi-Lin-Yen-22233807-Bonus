import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import LandingPage from './pages/Landing';
import LoginPage from './pages/Login';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';

function App() {
    const [users, setUsers] = useState([]);
    
    return (
        <>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/LoginPage" element={<LoginPage />} />
                <Route path="/SignUpPage" element={<SignUpPage users={users} setUsers={setUsers}/>} />
                <Route path="/HomePage" element={<HomePage />} />
            </Routes>
        </>
    );
}

export default App;