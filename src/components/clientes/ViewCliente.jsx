import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

import base from "../../module.css/template/BaseDashboard.module.css";
import styles from "../../module.css/clientes/ViewCliente.module.css"

import TitleBaseDashboard from '../template/HeaderDashboard'
import { useParams } from 'react-router-dom';

import { TextField, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
  '& label': {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  '& .MuiInputBase-input': {
    color: 'rgba(128, 128, 128)',
  },
  '& label.Mui-focused': {
    color: 'rgba(2, 175, 255, 0.8)',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'rgb(255, 255, 255, 0.5)',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.7)',
    },
    '&:hover fieldset': {
      borderColor: 'rgb(255, 255, 255, 0.5)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'rgba(2, 175, 255, 0.8)',
    },
  }
});


const ViewCliente = () => {

  const { id } = useParams();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = async () => {
    try {
      const response = await axios.get(`https://129.148.27.50/api/cliente/${id}`);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  if (isLoading) {
    return (
      <div className={base.spinner}></div>
    );
  }

  return (
    <div className={base.background}>
      <TitleBaseDashboard title={'Cliente'} />

      <div className={base.content}>
        {/* <p className={styles.p_title}>  Informações do Cliente </p> */}

        <div className={styles.container_1}>

          <div className={styles.div_img}>
            <small>#<span> {data.id} </span></small>
            <img alt='img_user' src={data.image_path} />
            <small className={`${data.status == 1 ? styles.active : styles.disabled}`}>
              {`${data.status == 1 ? "Ativo" : "Inativo"}`}
            </small>
          </div>

          <div className={styles.div_info}>
            <CssTextField
              label="Nome"
              name="name"
              fullWidth
              value={data.name ? data.name : 'Não informado'}
            />

            <CssTextField
              label="Telefone"
              name="phonenumber"
              fullWidth
              value={data.phone ? data.phone : 'Não informado'}
            />

            <CssTextField
              label="Email"
              name="email"
              fullWidth
              value={data.email ? data.email : 'Não informado'}
            />
          </div>

          <div className={styles.div_info}>
            <CssTextField
              label="Data de nascimento"
              name="birthdate"
              fullWidth
              value={data.birthdate ? data.birthdate : 'Não informado'}
            />

            <CssTextField
              label="Gênero"
              name="gender"
              fullWidth
              value={data.gender === "M" ? 'Masculino' : data.gender ? 'Feminino' : 'Outro'}
            />

            <CssTextField
              label="CPF ou CNPJ"
              name="identify_document"
              fullWidth
              value={data.identify_document ? data.birthdate : 'Não informado'}
            />
          </div>
        </div>

        <div className={styles.container_2}>

          <div className={styles.div_order}>
            <p className={styles.p_title}>  Pedidos </p>
            <div className={`${styles.content} ${data.sale != null ? '' : styles.noData}`}>
              {data.sale != null ? (
                data.sale.map((x, index) => (
                  <div className={styles.container_product} key={index}>
                    <div className={styles.product}>
                      <div className={styles.product_image}>
                        <img src={x.sale_item[0].product.product_img[0].image_path} alt="" width="100%" />
                      </div>

                      <div className={styles.info_product}>
                        <p> ID: {x.id}  </p>
                        <p> Status: {x.status}</p>
                        <p> Total: {x.total}</p>
                        <p> Ultima atualização: {x.updated_at}</p>
                      </div>
                    </div>

                    <div className={styles.div_link}>
                      <Link className={styles.btnVi} to={`/dashboard/pedido/${x.id}/${x.status}`}>Visualizar Pedido</Link>
                    </div>
                  </div>
                ))
              ) : (
                "Esse cliente ainda não realizou pedidos"
              )}
            </div>
          </div>

          <div className={styles.div_address}>
            <p className={styles.p_title}>  Endereços </p>
            <div className={`${styles.content} ${data.adresses.length != 0 ? '' : styles.noData}`}>
              {
                data.adresses.length != 0 ? (
                  data.adresses.map((address, index) => (
                    <Accordion
                      key={index}
                      sx={{
                        marginBottom: '10px',
                        backgroundColor: 'rgb(0, 0, 0, 0.2)',
                        color: 'white',
                        padding: '10px'
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                        aria-controls={`panel${index + 1}-content`}
                        id={`panel${index + 1}-header`}
                      >
                        <Typography> {address.cep} </Typography>
                      </AccordionSummary>

                      <AccordionDetails >
                        <div className={styles.info_address}>
                          <small><strong> Rua:</strong> {address.street}, {address.number} </small>
                          <small><strong> Bairro: </strong>{address.district} </small>
                          <small><strong> Complemento: </strong>{address.complement} </small>
                          <small><strong> Referencia: </strong>{address.reference} </small>
                          <small><strong> Cidade: </strong>{address.city}</small>
                          <small><strong> Estado: </strong>{address.state}</small>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  ))
                ) : (
                  "Esse cliente ainda não cadastrou endereços"
                )
              }
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ViewCliente;
