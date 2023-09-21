import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import { styled } from '@mui/material/styles';
import { TextField, Select, MenuItem, InputAdornment, InputLabel, FormControl, Modal, Typography, Button, Box } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

import styles from "../../module.css/produtos/AddProduto.module.css"
import base from "../../module.css/template/BaseDashboard.module.css"

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

const CssSelect = styled(Select)({
    '& .MuiSelect-icon': {
        color: 'rgb(255, 255, 255, 0.5) '
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderWidth: '1px !important',
        borderColor: 'rgb(255, 255, 255, 0.5) !important',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderWidth: '2px !important',
        borderColor: 'rgba(2, 175, 255, 0.8) !important',
    },
});

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'rgb(22, 27, 34)',
    width: 550,
    height: '80%',
    boxShadow: 24,
    borderRadius: '15px',
    p: 4,
    color: 'white',
    fontFamily: 'Hanuman',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
        width: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgb(182, 178, 178, 0.5)',
        borderRadius: '6px',
        width: '6px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: 'rgb(182, 178, 178, 0.8)',
    },

    '@media (max-width: 767px)': {
        width: '90%',
    }
};

const buttonAddStyle = {
    backgroundColor: 'rgb(34, 143, 34)',
    borderRadius: '15px',
    border: '0px',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: 'rgb(34, 143, 34, 0.7)'
    }
};

const buttonConfirmStyle = {
    backgroundColor: 'rgb(34, 143, 34)',
    border: '0px',
    width: '65%',
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
    width: '35%',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: 'rgba(229, 36, 36, 0.7)'
    }
};

const inputStyle = {
    marginBottom: '10px',
}

const SelectStyle = {
    marginBottom: '10px'
}

export default function AddCliente({ title, refreshProducts }) {

    // Modal - Ignore
    const [open, setOpen] = React.useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [categorys, setCategorys] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const fileInputRef = useRef(null);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSelectChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setSelectedCategory(value)
    };


    // const handleButtonClick = () => {
    //     // Ao clicar na div, dispara o clique no input de arquivo
    //     fileInputRef.current.click();
    // };

    // Form Data 
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
        img1: '',
        img2: ''
    });

    // Category

    const getCategory = () => {
        const apiUrl = 'https://api-fatec.onrender.com/api/v1/category';
        axios(apiUrl)
            .then((response) => {
                setIsLoading(false);
                setCategorys(response.data);
            })
            .catch((error) => {
                console.error('Erro ao consumir a API:', error);
            });
    };

    useEffect(() => {
        getCategory();
    }, []);


    // Funciton Add Product 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)


        try {
            const jsonData = {
                nome: formData.nome,
                descricao: formData.descricao,
                marca: formData.marca,
                preco: parseFloat(formData.preco),
                estoque: parseInt(formData.estoque),
                largura: parseFloat(formData.largura),
                comprimento: parseFloat(formData.comprimento),
                peso: parseFloat(formData.peso),
                altura: parseFloat(formData.altura),
                id_categoria: parseInt(formData.id_categoria),
                images: [{ image: formData.img1, image: formData.img2 }]
            };

            const response = await axios.post("https://api-fatec.onrender.com/api/v1/product", jsonData);

            refreshProducts();
            setIsLoading(false);
            handleClose();
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    };

    return (
        <>
            <div className={base.div_btn_add}>
                <Button onClick={handleOpen} className={styles.btn_add} sx={buttonAddStyle}>
                    <AddIcon />
                </Button>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" component="h1" style={{ width: '100%', textAlign: 'center', fontSize: '24px' }}>
                        Cadastrar {title}
                    </Typography>

                    <div id="modal-modal-description" sx={{ mt: 3 }} >
                        {/* className={ isLoading ? styles.loading : '' } */}

                        <form className={styles.form} onSubmit={handleSubmit}>

                            <CssTextField
                                label="Nome"
                                name="nome"
                                fullWidth
                                required
                                sx={inputStyle}
                                multiline
                                minRows={2}
                                maxRows={2}
                                onChange={handleInputChange}
                            />
                            <CssTextField
                                label="Descrição"
                                name="descricao"
                                fullWidth
                                required
                                multiline
                                minRows={5}
                                maxRows={5}
                                sx={inputStyle}
                                onChange={handleInputChange}
                            />

                            <CssTextField
                                label="Marca"
                                name="marca"
                                fullWidth
                                required
                                sx={inputStyle}
                                onChange={handleInputChange}
                            />

                            <CssTextField
                                label="Preço"
                                name="preco"
                                pattern="^[0-9]+(\.[0-9]+)?$"
                                fullWidth
                                required
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"> <small style={{ color: 'white' }} > R$  </small>  </InputAdornment>,
                                }}
                                sx={inputStyle}
                                onChange={handleInputChange}
                            />

                            <CssTextField
                                label="Estoque"
                                name="estoque"
                                pattern="^[0-9]+(\.[0-9]+)?$"
                                fullWidth
                                required
                                InputProps={{
                                    endAdornment: <InputAdornment position="start" > <small style={{ color: 'white' }} > un  </small> </InputAdornment>,
                                }}
                                sx={inputStyle}
                                onChange={handleInputChange}
                            />

                            <CssTextField
                                label="Largura"
                                name="largura"
                                pattern="^[0-9]+(\.[0-9]+)?$"
                                fullWidth
                                required
                                InputProps={{
                                    endAdornment: <InputAdornment position="start" > <small style={{ color: 'white' }} > cm  </small> </InputAdornment>,
                                }}
                                sx={inputStyle}
                                onChange={handleInputChange}
                            />

                            <CssTextField
                                label="Comprimento"
                                name="comprimento"
                                pattern="^[0-9]+(\.[0-9]+)?$"
                                fullWidth
                                required
                                InputProps={{
                                    endAdornment: <InputAdornment position="start" > <small style={{ color: 'white' }} > cm  </small> </InputAdornment>,
                                }}
                                sx={inputStyle}
                                onChange={handleInputChange}
                            />

                            <CssTextField
                                label="Peso"
                                name="peso"
                                pattern="^[0-9]+(\.[0-9]+)?$"
                                fullWidth
                                required
                                InputProps={{
                                    endAdornment: <InputAdornment position="start" > <small style={{ color: 'white' }} > kg  </small> </InputAdornment>,
                                }}
                                sx={inputStyle}
                                onChange={handleInputChange}
                            />

                            <CssTextField
                                label="Altura"
                                name="altura"
                                fullWidth
                                required
                                InputProps={{
                                    endAdornment: <InputAdornment position="start" > <small style={{ color: 'white' }} > cm  </small> </InputAdornment>,
                                }}
                                pattern="^[0-9]+(\.[0-9]+)?$"
                                sx={inputStyle}
                                onChange={handleInputChange}
                            />

                            <FormControl fullWidth sx={{ marginBottom: '10px' }}>
                                <InputLabel id="label-select" sx={{ color: 'white' }}>Categoria</InputLabel>
                                <CssSelect
                                    labelId="label-select"
                                    id="select-category"
                                    value={selectedCategory}
                                    label="Categoria"
                                    onChange={handleSelectChange}
                                >
                                    <MenuItem value={'10'}>Twenty</MenuItem>
                                    <MenuItem value={'21'}>Twenty one</MenuItem>
                                    <MenuItem value={'22'}>Twenty one and a half</MenuItem>
                                </CssSelect>
                            </FormControl>

                            <CssTextField
                                label="Url Imagem 1"
                                name="img1"
                                fullWidth
                                required
                                sx={inputStyle}
                                onChange={handleInputChange}
                            />

                            <CssTextField
                                label="Url Imagem 2"
                                name="img2"
                                fullWidth
                                sx={inputStyle}
                                onChange={handleInputChange}
                                required
                            />


                            {/* <div className={ styles.div_file } >
                                    <input 
                                        type="file" 
                                        name="file" 
                                        hidden 
                                        aria-label="Upload"
                                        ref={fileInputRef}
                                        onChange={(e) => {
                                            const selectedFile = e.target.files[0];
                                            
                                            if (selectedFile) {
                                                if (selectedFile.type === 'image/png' || selectedFile.type === 'image/jpeg') {
                                                  console.log('Arquivo selecionado:', selectedFile);
                                                } else {
                                                  alert('Por favor, selecione uma imagem PNG ou JPEG.');
                                                  fileInputRef.current.value = '';
                                                }
                                              }
                                        }}
                                        style={{ marginBottom: '10px'}}
                                    />

                                    <div className={styles.btn_file} onClick={handleButtonClick}>
                                         <small>  Selecione a imagem do Produto </small>
                                    </div>

                                    <div className={styles.filesUpload}>
                                        <div className={styles.file}> 
                                            <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.samsung.com%2Fbr%2Fsmartphones%2Fgalaxy-m%2Fgalaxy-m53-5g-blue-128gb-sm-m536bzbkzto%2F&psig=AOvVaw0Fibnry2I100Yrm5v1my3D&ust=1695155249091000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMD0q8X_tIEDFQAAAAAdAAAAABAE' alt='img'/>
                                        </div>
                                    </div>
                                </div> */}

                            <div className={styles.btnSubmit}>
                                <Button sx={buttonCloseStyle} onClick={handleClose}>
                                    <CloseIcon />
                                </Button>

                                <Button sx={buttonConfirmStyle} type='submit'>
                                    <CheckIcon />
                                </Button>
                            </div>
                        </form>
                    </div>
                </Box>
            </Modal>
        </>
    );
}
