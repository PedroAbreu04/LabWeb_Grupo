import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import Clientes from '../components/Clientes';
import Produtos from '../components/Produtos';
import BaseDashboard from '../components/BaseDashboard';

import Navbar from '../components/Navbar';

function DashboardRoutes() {

    return (
       <>
            <Navbar />
                <Routes>
                    <Route path="/" element={<BaseDashboard />} />
                    <Route path="/clientes" element={<Clientes />} />
                    <Route path="/produtos" element={<Produtos />} />

                    {/* Url with Params  */}
                    <Route path="/produto/:id" element={<BaseDashboard />} />
                    <Route path="/cliente/:id" element={<BaseDashboard />} />
                </Routes>
        </>
    );
} 

export default DashboardRoutes;