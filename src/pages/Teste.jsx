import { useEffect, useState } from "react";
import axios from 'axios';
import { TextField } from '@mui/material';
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

function Teste() {

    const data = { 
      produtos : { 
        quantCadastrados : 1, 
        quantEsgotados: 1
      },
      clientes: { 
        quantCadastrados : 1,
        quantDesativados : 2
      }
    }

    // const dataTable = async () => {
    //     const apiUrl = `https://129.148.27.50/api/carrinho/add/item/17`;
    //     let body = {"product_id" : 29};

    //     await axios.put(apiUrl, body)
    //         .then(async (response) => {
    //             let data = await response.data;
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // };

    // useEffect(() => {
    //     dataTable()
    // }, []);


    return (
        <div style={{ width:'100%', maxWidth:'500px'}}> <CssTextField
        label="Nome"
        name="name"
        fullWidth
      /> </div>
    );
}

export default Teste; 