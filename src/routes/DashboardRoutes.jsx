import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import Cliente from '../components/Cliente';
import Navbar from '../components/Navbar';

function DashboardRoutes() {

    return (
       <>
            <Navbar />
                <Routes>
                    <Route path="/cliente" element={<Cliente />} />
                </Routes>
        </>
    );
} 

export default DashboardRoutes;