import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { useState } from 'react';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound'


import PrivateRoutes from './PrivateRoutes';
function IndexRoutes() {

    const [key, setKey] = useState(0);

    return (
       <>
            <Router>
                <Routes>
                    <Route path="*"  element={< NotFound/>} />
                    <Route path="/"  element={<Login />} />
                    <Route path="/login"  element={<Login />} />
                    <Route path="/dashboard/*" element={ <PrivateRoutes component={Dashboard} routeKey={key}/> }/>
                </Routes>
            </Router>
        </>
    );
} 

export default IndexRoutes;