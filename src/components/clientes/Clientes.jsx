import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";

import base from "../../module.css/template/BaseDashboard.module.css"

import CardsClientes from "./CardsClientes"

import TitleBaseDashboard from '../template/HeaderDashboard'

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

            <div className={`${base.content} ${base.flip}`}>

                <div className={base.cards}>
                    <CardsClientes customers={dados} />
                </div>
            </div>
        </div>
    );
}

export default Clientes;

