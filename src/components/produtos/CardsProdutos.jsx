import React from 'react';

import { Link } from 'react-router-dom'

import styles from '../../module.css/produtos/CardsProdutos.module.css';
import base from "../../module.css/template/BaseDashboard.module.css"

const CardsProdutos = ({ products }) => {

  return (
    products.map((product) => (
      <div  className={`${styles.produto} ${base.hover}`}  key={product.id} >
        <div className={styles.cardBody}>
          <p className={styles.id}>{`#${product.id}`}</p>
          <h1>{product.name}</h1>

          {

            product.images.length > 0 ? (
              <img alt="Produto" src={`${product.images[0].image_path}`} />
            ) : (
              <img alt="Produto" src='/images/img_product.png' className={styles.noImgProduct} />
            )}

          <h1 className={styles.price}>{`R$ ${product.price}`}</h1>
          <span>{product.desc}</span>
        </div>
        <Link to={`/dashboard/produto/${product.id}`} className={styles.editar}> Editar </Link>
      </div>
    ))
  );

};

export default CardsProdutos;