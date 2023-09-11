import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import Cliente from '../components/Cliente';
import Produtos from '../components/Produtos';

import Navbar from '../components/Navbar';

function DashboardRoutes() {

    return (
       <>
            <Navbar />
                <Routes>
                    <Route path="/cliente" element={<Cliente />} />
                    <Route path="/produtos" element={<Produtos />} />
                </Routes>
        </>
    );
} 

export default DashboardRoutes;