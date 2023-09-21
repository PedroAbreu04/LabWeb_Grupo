import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';

import base from "../../module.css/template/BaseDashboard.module.css"
import TitleBaseDashboard from '../template/HeaderDashboard'
import AddProduct from './AddProduct';
import CardsProdutos from './CardsProdutos'

function Produtos() {

  // const [dados, setdados] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   dataTable();
  // }, []);

  // const dataTable = () => {
  //   const apiUrl = 'https://api-fatec.onrender.com/api/v1/product';
  //   axios(apiUrl)
  //     .then((response) => {
  //       setdados(response.data);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error('Erro ao consumir a API:', error);
  //     });
  // };


  // if (isLoading) {
  //   return (
  //     <div className={base.spinner}></div>
  //   );
  // }

  return (
    <div className={base.background}>
      <TitleBaseDashboard title={'Produtos'} />

      <div className={base.content}>

        <div>
          <AddProduct title={"Produtos"}  />
          {/* refreshProducts={ dataTable } */}
        </div>

        <div className={base.cards}>
          {/* <CardsProdutos products={dados}  /> */}
        </div>
      </div>
    </div>
  );
}

export default Produtos;
