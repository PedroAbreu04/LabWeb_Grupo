import React from "react";
import PageTitles from "./PageTitles";
import styles from "../module.css/Produtos.module.css";
import stylesLoading from "../module.css/Base.module.css"
import Produto from "./Produto";
import axios from 'axios';
import { useEffect, useState } from "react";
function Produtos() {
  
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dataTable();
  }, []);

  const dataTable = () => {
    const apiUrl = 'https://api-fatec.onrender.com/api/v1/product';
    axios(apiUrl)
      .then((response) => {
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao consumir a API:', error);
      });
  };

  return (
   <>
         <div className={styles.fundo}> 

        <PageTitles title="Produtos"/>

        <div className={styles.cards}>
        {isLoading ? (
          <div className={stylesLoading.spinner}></div>
  ) : (
    products.map((product) => (
      <Produto key={product.id} products={product} />
    ))
  )}
        </div>
        </div>
   </>
  );
}

export default Produtos;