import React from 'react';
import styles from '../module.css/Produto.module.css';
import axios from 'axios';
import { useEffect, useState } from "react";
import EditProduct from './EditProduct';


const Produto = ({products}) => {
  // const [imgProducts, setImgProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   dataTable();
  // }, []);

  // const dataTable = () => {
  //   const apiUrl = `https://api-fatec.onrender.com/api/v1/product_image/{${products.id}}`;
  //   axios(apiUrl)
  //     .then((response) => {
  //       setImgProducts(response.data);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error('Erro ao consumir a API:', error);
  //     });
  // };

  return (
    <div className={styles.produto}>
        <div className={styles.cardBody}>
            <p className={styles.id}>{`#${products.id}`}</p>
            <h1>{products.nome}</h1>
            <img alt="Produto" src={`https://planoscelular.claro.com.br/medias/18391-0-zero-300Wx300H-productCard?context=bWFzdGVyfGltYWdlc3w2OTc0NHxpbWFnZS9wbmd8aGNkL2hmZi85MjY3OTY0MDE4NzE4LzE4MzkxXzBfemVyb18zMDBXeDMwMEhfcHJvZHVjdENhcmR8NGI3NDdjMWIyYWYwODEzZTQwYTY3YzRhOTc3NTc2NGFiZWJiYzBkOThlNWYwYTM4ODkwYzM3MTJlZjYwYmEzNA`} />
            <h1>{`R$ ${products.preco}`}</h1>
            <span>{products.descricao}</span>
        </div>
      <EditProduct key={products.id} id={products.id}></EditProduct>
    </div>
  );
};

export default Produto;