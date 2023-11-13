import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { useState } from 'react';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Teste from '../pages/Teste';
import PrivateRoutes from './PrivateRoutes';
import PasswordReset from '../pages/PasswordReset';

function IndexRoutes() {

    const [key, setKey] = useState(0);

    return (
       <>
            <Router>
                <Routes>
                    <Route path="*"  element={< NotFound/>} />
                    <Route path="/"  element={<Login />} />
                    <Route path="/login"  element={<Login />} />
                    <Route path="/teste"  element={<Teste />} />
                    <Route path="/password/forgot/:token?"  element={<PasswordReset />} /> 
                    <Route path="/dashboard/*" element={ <PrivateRoutes component={Dashboard} routeKey={key}/> }/>
                </Routes>
            </Router>
        </>
    );
} 

export default IndexRoutes;