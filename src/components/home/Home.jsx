import React from 'react';
import base from "../../module.css/template/BaseDashboard.module.css"
import TitleBaseDashboard from '../template/HeaderDashboard'
import styles from '../../module.css/home/Home.module.css';
import { useState, useEffect } from "react";
import axios from 'axios';

import DonutGrapich from './DonutGrapich';
import BarGrapich from './BarGrapich';

import PersonIcon from '@mui/icons-material/Person';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';

function Home() {

    const [isLoading, setIsLoading] = useState(true);
    const [dataGrapich, setDataGrapich] = useState(true);
    const [wGrapich, setWGrapich] = useState();
    const [hGrapich, setHGrapich] = useState();

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 767) {
            setWGrapich(280)
            setHGrapich(200)
        } else {
            setWGrapich(500)
            setHGrapich(300)
        }
    });

    /* Requisição */

    const dataTable = async () => {
        const apiUrl = 'https://129.148.27.50/api/dados';
        await axios(apiUrl)
            .then(async (response) => {
                let data = await response.data
                setDataGrapich(await data)
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Erro ao consumir a API:', error);
            });
    };

    useEffect(() => {
        dataTable();
        
        if (window.innerWidth <= 767) {
            setWGrapich(280)
            setHGrapich(200)
        } else {
            setWGrapich(500)
            setHGrapich(300)
        }
    }, []);

    if (isLoading) {
        return (
            <div className={base.spinner}></div>
        );
    }

    return (
        <div className={base.background}>
            <TitleBaseDashboard title={'Home Page'} />

            <div className={`${base.content} ${base.flip}`} >
                <div className={base.cards}>
                    <div className={styles.content_1}>
                        <div className={styles.simpleData}>
                            <span>
                                <small>Quant. de Clientes</small>
                            </span>
                            <div>
                                <PersonIcon fontSize='32px' />
                                <span>  {dataGrapich.customers.total}   </span>
                            </div>
                        </div>
                        <div className={styles.simpleData}>
                            <span>
                                <small>Quant. de Funcionários</small>
                            </span>
                            <div>
                                <AdminPanelSettingsIcon fontSize='32px' />
                                <span>  {dataGrapich.users.total}   </span>
                            </div>
                        </div>
                        <div className={styles.simpleData}>
                            <span>
                                <small>Quant. de Vendas</small>
                            </span>
                            <div>
                                <ReceiptIcon fontSize='32px' />
                                <span>  {dataGrapich.sales.total}   </span>
                            </div>
                        </div>
                        <div className={styles.simpleData}>
                            <span>
                                <small>Quant. de Produtos</small>
                            </span>
                            <div>
                                <ProductionQuantityLimitsIcon fontSize='32px' />
                                <span>  {dataGrapich.products.total}   </span>
                            </div>
                        </div>
                        <div className={styles.simpleData}>
                            <span>
                                <small>Quant. de Carrinhos</small>
                            </span>
                            <div>
                                <TimeToLeaveIcon fontSize='32px' />
                                <span>  {dataGrapich.carts.total}   </span>
                            </div>
                        </div>
                    </div>

                    

                    <div className={styles.content_2}>

                    <div className={styles.graphic}>
                        <small> Produtos por Categoria </small>
                        <DonutGrapich
                            data={dataGrapich.products.by_category}
                            wGrapich={wGrapich}
                            hGrapich={hGrapich}
                        />
                    </div>
                    
                        <div className={styles.graphic} >
                            <small> Cadastrados esse mes </small>
                            <BarGrapich
                                data={dataGrapich}
                                wGrapich={wGrapich}
                                hGrapich={hGrapich}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
