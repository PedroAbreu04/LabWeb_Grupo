import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import { styled } from '@mui/material/styles';
import { TextField, Select, MenuItem, InputAdornment, InputLabel, FormControl, Modal, Typography, Button, Box } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';


import styles from "../../module.css/produtos/AddProduto.module.css"
import base from "../../module.css/template/BaseDashboard.module.css"
import FormProduto from './FormProduto';

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

export default function AddCliente({ title, refreshProducts }) {

    //  Modal - Ignore

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


    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    //  Form Data 

    const [formData, setFormData] = useState({
        name: '',
        desc: '',
        brand: '',
        price: '',
        stock: '',
        height: '',
        unity: '',
        width: '',
        weight: '',
        id_categoria: '',
        images: [{ image: '' }, { image: '' }],
        img1: '',
        img2: ''
    });

    // Category

    const getCategory = () => {
        const apiUrl = 'https://api-fatec.onrender.com/api/v1/category';
        axios(apiUrl)
            .then((response) => {
                setCategorys(response.data);
                setIsLoading(false);
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
                name: formData.name,
                desc: formData.desc,
                brand: formData.brand,
                price: parseFloat(formData.price),
                stock: parseInt(formData.stock),
                unity: formData.unity,
                width: parseFloat(formData.width),
                weight: parseFloat(formData.weight),
                height: parseFloat(formData.height),
                id_categoria: parseInt(formData.id_categoria),
                images: [{ image: formData.img1 }, { image: formData.img2 }]
            };

            const response = await axios.post("https://api-fatec.onrender.com/api/v1/product", jsonData);
            if (response.status == 201) {

                // tirar isso, api dos cara ta bugada. 

                setTimeout(function () {
                    refreshProducts();
                    setIsLoading(false);
                    handleClose();
                }, 3000);

            }

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

                    <div id="modal-modal-description" sx={{ mt: 3 }} className={isLoading ? styles.loading : ''}>

                        <FormProduto
                            typeForm={'save'}
                            categorys={categorys}

                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                            handleSelectChange={handleSelectChange}

                            formData={formData}
                            handleInputChange={handleInputChange}

                            handleSubmit={handleSubmit}
                            handleClose={handleClose}
                        />

                    </div>
                </Box>
            </Modal>
        </>
    );
}
