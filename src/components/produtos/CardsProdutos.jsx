import React from 'react';

import { Link } from 'react-router-dom'

import styles from '../../module.css/produtos/CardsProdutos.module.css';

const CardsProdutos = ({ products }) => {
  return (
    products.map((product) => (
      <div className={styles.produto} key={product.id}>
        <div className={styles.cardBody}>
          <p className={styles.id}>{`#${product.id}`}</p>
          <h1>{product.nome}</h1>

          {product && product.images && product.images.length > 0 ? (
            <img alt="Produto" src={`${product.images[0].image}`} />
          ) : (
            <img alt="Produto" src='/images/img_product.png' className={styles.noImgProduct} />
          )}

          <h1 className={styles.price}>{`R$ ${product.preco}`}</h1>
          <span>{product.descricao}</span>
        </div>
        <Link to={`/dashboard/produto/${product.id}`} className={styles.editar}> Editar </Link>
      </div>
    ))
  );

};

export default CardsProdutos;