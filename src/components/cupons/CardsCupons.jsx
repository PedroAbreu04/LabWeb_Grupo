import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../module.css/cupom/CardsCupons.module.css';
import base from '../../module.css/template/BaseDashboard.module.css';

const CardsCupons = ({ cupons }) => {

  return cupons.map((cupom) => {
    // Converta a string da validade para um objeto Date
    const validityDate = new Date(cupom.validity);

    // Obtenha os componentes de data (dia, mês, ano)
    const day = validityDate.getDate();
    const month = validityDate.getMonth() + 1; // Os meses em JavaScript são baseados em zero
    const year = validityDate.getFullYear();

    // Formate a data como uma string "DD/MM/YYYY"
    const formattedDate = `${day}/${month}/${year}`;

    return (
      <div className={`${styles.cupom} ${base.hover}`} key={cupom.id}>
        <div className={styles.cardBody}>
          <p className={styles.id}>{`#${cupom.id}`}</p>
          <h1>Code: {cupom.code}</h1>
          <h1 className={styles.discountValue}>{`${cupom.discount_value}% OFF`}</h1>
          <span>{cupom.desc}</span>
          <span>Validade: {formattedDate !=  '31/12/1969' ? formattedDate : '-'}</span>
        </div>
        {/* <Link to={`/dashboard/cupom/${cupom.id}`} className={styles.editar}>
          Editar
        </Link> */}
      </div>
    );
  });
};

export default CardsCupons;
