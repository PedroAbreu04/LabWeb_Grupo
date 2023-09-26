import React from 'react';
import styles from "../../module.css/template/ViewCliente.module.css"
import { useState, useEffect } from "react";
import axios from "axios";

import base from "../../module.css/template/BaseDashboard.module.css";
import AddCliente from './AddCliente';
import CardsClientes from "./CardsClientes"

import TitleBaseDashboard from '../template/HeaderDashboard'

const ViewCliente = (id) => {

    const [dados, setdados] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getPosts = async () => {
        try {
            const response = await axios.get("https://129.148.27.50/api/cliente/" + id);
            setdados(response.data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    if (false) {
        return (
            <div className={base.spinner}></div>
        );
    }

  return (
    <div className={base.background}>
        <TitleBaseDashboard title={'cliente'} />

        <div className={base.content}>

            <div className={styles.viewContent}>
                <div className={styles.title}>
                        <p>informações pessoais</p>
                        <hr className={styles.hrTitle}/>
                </div>

            <div className={styles.clienteInfo}>

            <div className={styles.clienteImage}>
            <img src={'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix'}/>
            </div>

            <div className={styles.column}>
              <div>
                <strong>Nome: {dados.name} </strong>
              </div>
              <div>
                <strong>Email: {dados.email} </strong>
              </div>
              <div>
                <strong>CPF: {dados.identify_document} </strong> 
              </div>
              <div>
                <strong>Data de Nascimento: {dados.birthdate} </strong>
              </div>
              <div>
                <strong>Status: {dados.status === '1' ? 'Ativo' : 'Inativo'} </strong>
              </div>
            </div>

            <div className={styles.column}>
              <div>
                <strong>Endereço: {dados.address || 'Não disponível'} </strong>
              </div>
              <div>
                <strong>Telefone: {dados.phone || 'Não disponível'} </strong>
              </div>
              <div>
                <strong>Gênero: {dados.gender || 'Não disponível'} </strong>
              </div>
              <div>
                <strong>Data de Criação: {dados.created_at} </strong>
              </div>
              <div>
                <strong>Data de Atualização: {dados.updated_at} </strong>
              </div>
            </div>

        </div>
        <div className={styles.pedidos}>
            <div className={styles.title}>
                <center>
                    <p>Pedidos</p>
                </center>
            <div className={styles.retangulo}></div>
            </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ViewCliente;
