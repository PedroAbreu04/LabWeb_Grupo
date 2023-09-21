import React from 'react';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';

import EditNoteIcon from '@mui/icons-material/EditNote';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import axios from 'axios';

import base from "../../module.css/template/BaseDashboard.module.css";
import styles from "../../module.css/produtos/Produto.module.css";

function Produto() {

    const { id } = useParams();

    const [dados, setdados] = useState({
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
        images: '',
        id_categoria: {
            nome: ''
        }
    });

    const [isLoading, setIsLoading] = useState(true);

    const CssTextField = styled(TextField)({
        '& label': {
            color: '#FFF',
        },
        '& label.Mui-focused': {
            color: 'rgba(2, 175, 255, 0.8)',
        },
        '& .MuiInputBase-input': {
            color: '#FFF',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'rgb(255, 255, 255, 0.5)',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'rgb(255, 255, 255, 0.5)',
            },
            '&:hover fieldset': {
                borderColor: 'rgb(255, 255, 255, 0.5)',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'rgba(2, 175, 255, 0.8)',
            },
        }
    });

    const buttonEditSyle = {
        backgroundColor: 'rgba(128, 128, 128)',
        borderRadius: '15px',
        border: '0px',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgba(128, 128, 128, 0.7)'
        }
    };

    const buttonConfirmStyle = {
        backgroundColor: 'rgb(34, 143, 34)',
        border: '0px',
        borderRadius: '15px',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgb(34, 143, 34, 0.7)'
        }
    };

    const buttonCloseStyle = {
        backgroundColor: 'rgb(229, 36, 36)',
        border: '0px',
        borderRadius: '15px',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgba(229, 36, 36, 0.7)'
        }
    };

    useEffect(() => {
        dataTable();
    }, []);

    const dataTable = () => {
        const apiUrl = `https:api-fatec.onrender.com/api/v1/product/${id}`;

        axios(apiUrl)
            .then((response) => {
                setdados(response.data);
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

            <div className={base.content}>

                <div className={styles.contentProduct}>

                    <h1> Produto </h1>

                    <div className={styles.productImage}>
                        {dados.images[0] ? (
                            <img src={dados.images[0].image} alt='product' />
                        ) : (
                            <img alt="Produto" src='/images/img_product.png' className={styles.noImgProduct} />
                        )}
                        
                    </div>

                    <div className={styles.infoProducts}>

                        <CssTextField
                            label="Nome"
                            name="nome"
                            value={dados.nome}
                            fullWidth
                            required
                            multiline
                            minRows={2}
                            maxRows={2}
                            sx={{ marginBottom: '10px' }}
                        />

                        <CssTextField
                            label="Descrição"
                            name="descricrao"
                            value={dados.descricao}
                            fullWidth
                            required
                            multiline
                            minRows={5}
                            maxRows={5}
                            sx={{ marginBottom: '10px' }}
                        />

                        <CssTextField
                            label="Marca"
                            name="marca"
                            value={dados.marca}
                            fullWidth
                            required
                            sx={{ marginBottom: '10px' }}
                        />

                        <CssTextField
                            label="Preço"
                            name="preco"
                            value={dados.preco}
                            fullWidth
                            required
                            InputProps={{
                                startAdornment: <InputAdornment position="start"> <small style={{ color: 'white' }} > $  </small>  </InputAdornment>,
                            }}
                            sx={{ marginBottom: '10px' }}
                        />

                        <CssTextField
                            label="Estoque"
                            name="estoque"
                            value={dados.estoque}
                            fullWidth
                            required
                            //  InputProps={{
                            //      startAdornment: <InputAdornment position="start"><small style={{  color: 'white'}} > $  </small> </InputAdornment>,
                            //  }}
                            sx={{ marginBottom: '10px' }}
                        />

                        <CssTextField
                            label="Largura"
                            name="largura"
                            value={dados.largura}
                            fullWidth
                            required
                            InputProps={{
                                startAdornment: <InputAdornment position="start" > <small style={{ color: 'white' }} > cm  </small> </InputAdornment>,
                            }}
                            sx={{ marginBottom: '10px' }}
                        />

                        <CssTextField
                            label="Comprimento"
                            name="comprimento"
                            value={dados.comprimento}
                            fullWidth
                            required
                            InputProps={{
                                startAdornment: <InputAdornment position="start" > <small style={{ color: 'white' }} > cm  </small> </InputAdornment>,
                            }}
                            sx={{ marginBottom: '10px' }}
                        />

                        <CssTextField
                            label="Peso"
                            name="peso"
                            value={dados.peso}
                            fullWidth
                            required
                            InputProps={{
                                startAdornment: <InputAdornment position="start" > <small style={{ color: 'white' }} > mg  </small> </InputAdornment>,
                            }}
                            sx={{ marginBottom: '10px' }}
                        />

                        <CssTextField
                            label="Altura"
                            name="altura"
                            value={dados.altura}
                            fullWidth
                            required
                            InputProps={{
                                startAdornment: <InputAdornment position="start" > <small style={{ color: 'white' }} > cm  </small> </InputAdornment>,
                            }}
                            sx={{ marginBottom: '10px' }}
                        />

                        <CssTextField
                            label="Categoria"
                            name="categoria"
                            value={dados.id_categoria.nome}
                            fullWidth
                            required
                        />

                    </div>

                </div>

                <div className={styles.btnsProduct}>
                    <Button sx={buttonCloseStyle} >
                        <CloseIcon />
                    </Button>

                    <Button sx={buttonEditSyle}>
                        <EditNoteIcon />
                    </Button>

                    <Button sx={buttonConfirmStyle} >
                        <CheckIcon />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Produto;
