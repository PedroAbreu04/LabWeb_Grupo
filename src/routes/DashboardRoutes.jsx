import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Home from '../components/home/Home';

import Clientes from '../components/clientes/Clientes';
import ViewCliente from '../components/clientes/ViewCliente';

import Produto from '../components/produtos/Produto';
import Produtos from '../components/produtos/Produtos';

import Pedidos from '../components/pedidos/Pedidos'
import ViewPedido from '../components/pedidos/ViewPedido';

import BaseDashboard from '../components/template/BaseDashboard';

import Navbar from '../components/Navbar';
import PrivateRoutes from './PrivateRoutes';

function DashboardRoutes({role}) {

    const [key, setKey] = useState(0);

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<PrivateRoutes component={Home} routeKey={key}  />} />
                <Route path="/home" element={<PrivateRoutes component={Home} routeKey={key} />} />
                <Route path="/clientes" element={<PrivateRoutes component={Clientes} routeKey={key} />} />
                <Route path="/produtos" element={<PrivateRoutes component={Produtos} routeKey={key} role={role}/>} />
                <Route path="/pedidos" element={<PrivateRoutes component={Pedidos} routeKey={key}/>} />

                {/* Url with Params  */}

                <Route path="/produto/:id" element={<PrivateRoutes component={Produto} routeKey={key} />} />
                <Route path="/cliente/:id" element={<PrivateRoutes component={ViewCliente} routeKey={key} />} />
                <Route path="/pedido/:id/:status" element={<PrivateRoutes component={ViewPedido} routeKey={key} />} />
            </Routes>

        </>
    );
}

export default DashboardRoutes;