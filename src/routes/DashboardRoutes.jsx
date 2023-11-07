import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Home from '../components/home/Home';

import Config from '../components/config/Config'

import Clientes from '../components/clientes/Clientes';
import ViewCliente from '../components/clientes/ViewCliente';

import Produto from '../components/produtos/Produto';
import Produtos from '../components/produtos/Produtos';

import Pedidos from '../components/pedidos/Pedidos'
import ViewPedido from '../components/pedidos/ViewPedido';

import Tabelas from '../components/tabelas/Tabelas'

import Analitycs from '../components/analitycs/Analitycs'

import Usuarios from '../components/usuarios/Usuarios'
import ViewUsuario from '../components/usuarios/ViewUsuario'

import BaseDashboard from '../components/template/BaseDashboard';

import Navbar from '../components/Navbar';
import PrivateRoutes from './PrivateRoutes';

function DashboardRoutes({ role, userImagePath }) {

    const [key, setKey] = useState(0);

    return (
        <>
            <Navbar userImagePath={userImagePath} />
            <Routes>
                <Route path="/" element={<PrivateRoutes component={Home} routeKey={key} role={role} />} />
                <Route path="/home" element={<PrivateRoutes component={Home} routeKey={key} role={role} />} />
                <Route path="/clientes" element={<PrivateRoutes component={Clientes} routeKey={key} role={role} />} />
                <Route path="/produtos" element={<PrivateRoutes component={Produtos} routeKey={key} role={role} />} />
                <Route path="/pedidos" element={<PrivateRoutes component={Pedidos} routeKey={key} role={role} />} />
                <Route path="/config" element={<PrivateRoutes component={Config} routeKey={key} role={role} />} />
                <Route path="/tabelas" element={<PrivateRoutes component={Tabelas} routeKey={key} role={role} />} />
                <Route path="/analitycs" element={<PrivateRoutes component={Analitycs} routeKey={key} role={role} />} />
                <Route path="/usuarios" element={<PrivateRoutes component={Usuarios} routeKey={key} role={role} />} />

                {/* Url with Params  */}

                <Route path="/produto/:id" element={<PrivateRoutes component={Produto} routeKey={key} role={role} />} />
                <Route path="/cliente/:id" element={<PrivateRoutes component={ViewCliente} routeKey={key} role={role} />} />
                <Route path="/pedido/:id" element={<PrivateRoutes component={ViewPedido} routeKey={key} role={role} />} />
                <Route path="/usuario/:id" element={<PrivateRoutes component={ViewUsuario} routeKey={key} role={role} />} />

            </Routes>

        </>
    );
}

export default DashboardRoutes;