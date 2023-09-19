import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Clientes from '../components/Clientes';
import Produtos from '../components/Produtos';
import Produto from '../components/Produto';

import BaseDashboard from '../components/BaseDashboard';

import Navbar from '../components/Navbar';
import PrivateRoutes from './PrivateRoutes';

function DashboardRoutes() {

    const [key, setKey] = useState(0);

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<PrivateRoutes component={BaseDashboard} routeKey={key} />} />
                <Route path="/clientes" element={<PrivateRoutes component={Clientes} routeKey={key} />} />
                <Route path="/produtos" element={<PrivateRoutes component={Produtos} routeKey={key} />} />

                {/* Url with Params  */}

                <Route path="/produto/:id" element={<PrivateRoutes component={Produto} routeKey={key} />} />
                <Route path="/cliente/:id" element={<PrivateRoutes component={BaseDashboard} routeKey={key} />} />
            </Routes>

        </>
    );
}

export default DashboardRoutes;