import CardsClientes from "./CardsClientes"
import React from 'react';
import base from "../module.css/BaseDashboard.module.css"
import { useState, useEffect } from "react";
import TitleBaseDashboard from './HeaderDashboard'
import AddCliente from './AddCliente';
import axios from "axios";

function Clientes() {

    const [dados, setdados] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getPosts = async () => {
        try {
            const response = await axios.get("https://129.148.27.50/api/cliente/resume");
            setdados(response.data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    if (isLoading) {
        return (
            <div className={base.spinner}></div>
        );
    }

    return (
        <div className={base.background}>
            <TitleBaseDashboard title={'Clientes'} />

            <div className={base.content}>

                <div>
                    <AddCliente title={'Cliente'} />
                </div>

                <div className={base.cards}>
                    <CardsClientes customers={ dados } />
                </div>
            </div>
        </div>
    );
}

export default Clientes;

