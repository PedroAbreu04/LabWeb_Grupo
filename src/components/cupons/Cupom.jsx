import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Carrousel from './Carrousel';
import axios from 'axios';
import base from '../../module.css/template/BaseDashboard.module.css';
import styles from '../../module.css/cupons/Cupom.module.css';
import FormCupom from './FormCupom';
import NoPerm from '../NoPerm';

function Cupom({ role }) {
  const [swiperKey, setSwiperKey] = useState(0);
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [isNoPermVisible, setIsNoPermVisible] = useState(false);

  const onCloseModal = () => {
    setIsNoPermVisible(false);
  };

  const handleClose = () => {
    console.log('fechei');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [formData, setFormData] = useState({
    code: '',
    desc: '',
    discount_value: '',
    validity: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (role !== 'ADMIN') {
      setIsNoPermVisible(true);
      return;
    }

    setIsLoading(true);

    try {
      const jsonData = {
        code: formData.code,
        desc: formData.desc,
        discount_value: parseFloat(formData.discount_value),
        validity: formData.validity,
      };

      const response = await axios.put(`https://api-fatec.onrender.com/api/v1/cupom/${id}`, jsonData);

      setTimeout(() => {
        setSwiperKey((prevKey) => prevKey + 1);
      }, 1500);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const dataTable = async () => {
    setIsLoading(true);

    const apiUrl = `https://api-fatec.onrender.com/api/v1/cupom/${id}`;

    await axios(apiUrl)
      .then(async (response) => {
        if (response.status === 200) {
          let data = await response.data;
          setFormData({ ...data });
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error('Erro ao consumir a API:', error);
      });
  };

  useEffect(() => {
    dataTable();
  }, [swiperKey]);

  if (isLoading) {
    return <div className={base.spinner}></div>;
  }

  return (
    <div className={base.background}>
      <div className={base.content}>
        <div className={styles.contentCupom}>
          <h1> Cupom </h1>

          <div className={styles.divSlider}>
            <Carrousel swiperKey={swiperKey} data={[]} condition={'cupom'} />
          </div>

          <div className={styles.infoCupom}>
            <FormCupom
              typeForm={'update'}
              formData={formData}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              handleClose={handleClose}
            />
          </div>
        </div>
      </div>
      {isNoPermVisible && <NoPerm onClose={onCloseModal} />}
    </div>
  );
}

export default Cupom;