import React, { useEffect, useState } from 'react';
import axios from 'axios';

import base from '../../module.css/template/BaseDashboard.module.css';
import TitleBaseDashboard from '../template/HeaderDashboard';
import AddCupom from './AddCupom';
import CardsCupons from './CardsCupons';

function Cupons({ role }) {
  const [cupons, setCupons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dataTable();
  }, []);

  const dataTable = () => {
    const apiUrl = 'https://129.148.27.50/api/cupom';
    axios(apiUrl)
      .then((response) => {
        setCupons(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao consumir a API:', error);
      });
  };


  if (isLoading) {
    return (
      <div className={base.spinner}></div>
    );
  }

  return (
    <div className={base.background}>
      <TitleBaseDashboard title={'Cupons'} />

      <div className={`${base.content} ${base.flip}`}>
        <div>
          <AddCupom title={'Cupons'} refreshCupons={dataTable} role={role} />
        </div>

        <div className={base.cards}>
          <CardsCupons cupons={cupons} />
        </div>
      </div>
    </div>
  );
}

export default Cupons;
