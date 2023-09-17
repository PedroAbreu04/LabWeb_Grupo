import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import styles from '../module.css/Produto.module.css';
import { styled } from '@mui/material/styles';
import { InputAdornment,TextField } from '@mui/material';
import { useEffect } from 'react';

const CssTextField = styled(TextField)({
  '& label': {
    color: '#FFF',
  },
  '& label.Mui-focused': {
    color: '#FFF',
  },
  '& .MuiInputBase-input': {
    color: '#FFF',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#FF6701',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#FF6701',
    },
    '&:hover fieldset': {
      borderColor: '#FF6701',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#FF6701',
    },
  },
});

function EditProduct({id}) {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    nome: '',
    descricao: '',
    marca: '',
    preco: '',
    estoque: '',
    largura: '',
    comprimento: '',
    peso: '',
    altura: '',
    id_categoria: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `https://api-fatec.onrender.com/api/v1/product/${id}`;
        const response = await axios.get(apiUrl);
        setIsLoading(false);
  
        // Atualize o estado de formData com os detalhes do produto, incluindo a categoria
        setFormData({
          nome: response.data.nome,
          descricao: response.data.descricao,
          marca: response.data.marca,
          preco: response.data.preco,
          estoque: response.data.estoque,
          largura: response.data.largura,
          comprimento: response.data.comprimento,
          peso: response.data.peso,
          altura: response.data.altura,
          id_categoria: response.data.id_categoria.id, // 
        });
      } catch (error) {
        console.error('Erro ao consumir a API:', error);
      }
    };
  
    fetchData();
  }, [id]);
 
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    console.log('fechando');
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Crie um objeto JSON com os valores do formulário
      const jsonData = {
        nome: formData.nome,
        descricao: formData.descricao,
        marca: formData.marca,
        preco: parseFloat(formData.preco), // Certifique-se de que o preço seja um número
        estoque: parseInt(formData.estoque), // Certifique-se de que o estoque seja um número inteiro
        largura: parseFloat(formData.largura), // Certifique-se de que a largura seja um número
        comprimento: parseFloat(formData.comprimento), // Certifique-se de que o comprimento seja um número
        peso: parseFloat(formData.peso), // Certifique-se de que o peso seja um número
        altura: parseFloat(formData.altura), // Certifique-se de que a altura seja um número
        id_categoria: parseInt(formData.id_categoria),
      };
      console.log(jsonData)

      // Faça a solicitação POST para a API usando o Axios
      const response = await axios.put(`https://api-fatec.onrender.com/api/v1/product/${id}`, jsonData);

      // Lide com a resposta da API (por exemplo, exiba uma mensagem)
      console.log('Resposta da API:', response.data);

      // Feche o modal após o envio bem-sucedido
      handleClose();
    } catch (error) {
      console.error('Erro ao enviar os dados para a API:', error);
    }
  };

  return (
    <>
      <div className={styles.editar} onClick={handleOpen}>
        <p>Editar</p>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: '#172335',
            boxShadow: 24,
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'white',
            gap: '10px',
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            Editar Produto
          </Typography>

          <form onSubmit={handleSubmit} className={styles.form} 
>
            <CssTextField
              label="Nome"
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
              fullWidth
              required
            />
            <CssTextField
              label="Descrição"
              name="descricao"
              value={formData.descricao}
              onChange={handleInputChange}
              fullWidth
              required
            />
            <CssTextField
              label="Marca"
              name="marca"
              value={formData.marca}
              onChange={handleInputChange}
              fullWidth
              required
            />
            <CssTextField
              label="Preço"
              name="preco"
              type="number"
              value={formData.preco}
              onChange={handleInputChange}
              fullWidth
              required
            />
            <CssTextField
              label="Estoque"
              name="estoque"
              type="number"
              value={formData.estoque}
              onChange={handleInputChange}
              fullWidth
              required
            />
            <CssTextField
              label="Largura"
              name="largura"
              type="number"
              value={formData.largura}
              onChange={handleInputChange}
              fullWidth
              required
            />
            <CssTextField
              label="Comprimento"
              name="comprimento"
              type="number"
              value={formData.comprimento}
              onChange={handleInputChange}
              fullWidth
              required
            />
            <CssTextField
              label="Peso"
              name="peso"
              type="number"
              value={formData.peso}
              onChange={handleInputChange}
              fullWidth
              required
            />
            <CssTextField
              label="Altura"
              name="altura"
              type="number"
              value={formData.altura}
              onChange={handleInputChange}
              fullWidth
              required
            />
            <CssTextField
              label="Categoria"
              name="id_categoria"  
              value={formData.id_categoria}  
              onChange={handleInputChange}
              fullWidth
              required
            />
            {/* <ButtonSend type="submit">Enviar</ButtonSend>
            <ButtonClose onClick={handleClose}>Fechar</ButtonClose> */}
          </form>
        </Box>
      </Modal>
    </>
  );
}

export default EditProduct;
