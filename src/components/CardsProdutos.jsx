import React from 'react';
import styles from '../module.css/CardsProdutos.module.css';
import { Link } from 'react-router-dom'

const CardsProdutos = ({ products }) => {
  return (
    products.map((product) => (
      <div className={styles.produto} key={product.id}>
        <div className={styles.cardBody}>
          <p className={styles.id}>{`#${product.id}`}</p>
          <h1>{product.nome}</h1>
          <img alt="Produto" src={`https://planoscelular.claro.com.br/medias/18391-0-zero-300Wx300H-productCard?context=bWFzdGVyfGltYWdlc3w2OTc0NHxpbWFnZS9wbmd8aGNkL2hmZi85MjY3OTY0MDE4NzE4LzE4MzkxXzBfemVyb18zMDBXeDMwMEhfcHJvZHVjdENhcmR8NGI3NDdjMWIyYWYwODEzZTQwYTY3YzRhOTc3NTc2NGFiZWJiYzBkOThlNWYwYTM4ODkwYzM3MTJlZjYwYmEzNA`} />
          <h1 className={styles.price}>{`R$ ${product.preco}`}</h1>
          <span>{product.descricao}</span>
        </div>
        <Link to={`/dashboard/cliente/${product.id}`} className={styles.editar}> Editar </Link>
      </div>
    ))
  );

};

export default CardsProdutos;