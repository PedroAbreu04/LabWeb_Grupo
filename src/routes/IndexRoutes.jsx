import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';

function IndexRoutes() {

    return (
       <>
            <Router>
                <Routes>
                    <Route path="/"  element={<Login />} />
                    <Route path="*"  element={<Login />} />
                    <Route path="/login"  element={<Login />} />
                    <Route path="/dashboard/*" element={<Dashboard />} />
                </Routes>
            </Router>
        </>
    );
} 

export default IndexRoutes;