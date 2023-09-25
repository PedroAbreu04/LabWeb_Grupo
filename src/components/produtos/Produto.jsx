import React from 'react';

import Button from '@mui/material/Button';


import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

import base from "../../module.css/template/BaseDashboard.module.css";
import styles from "../../module.css/produtos/Produto.module.css";
import FormProduto from './FormProduto';

function Produto() {

    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [categorys, setCategorys] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState();

    const handleClose = () => { console.log('fechei') };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSelectChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setSelectedCategory(value)
    };

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)

        // setIsLoading(true)

        // try {
        //     const jsonData = {
        //         nome: formData.nome,
        //         descricao: formData.descricao,
        //         marca: formData.marca,
        //         preco: parseFloat(formData.preco),
        //         estoque: parseInt(formData.estoque),
        //         largura: parseFloat(formData.largura),
        //         comprimento: parseFloat(formData.comprimento),
        //         peso: parseFloat(formData.peso),
        //         altura: parseFloat(formData.altura),
        //         id_categoria: parseInt(formData.id_categoria),
        //         images: [{ image: formData.img1, image: formData.img2 }]
        //     };

        //     const response = await axios.post("https://api-fatec.onrender.com/api/v1/product", jsonData);

        //     refreshProducts();
        //     setIsLoading(false);
        //     handleClose();
        // } catch (error) {
        //     console.log(error)
        //     setIsLoading(false)
        // }
    };


    // useEffect(() => {
    //     dataTable();
    // }, []);

    // const dataTable = () => {
    //     const apiUrl = `https:api-fatec.onrender.com/api/v1/product/${id}`;

    //     axios(apiUrl)
    //         .then((response) => {
    //             setdados(response.data);
    //             setIsLoading(false);
    //         })
    //         .catch((error) => {
    //             console.error('Erro ao consumir a API:', error);
    //         });
    // };


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
                        <img alt="Produto" src='/images/img_product.png' className={styles.noImgProduct} />
                    </div>

                    <div className={styles.infoProducts}>

                        <FormProduto
                            typeForm={'save'}
                            categorys={categorys}

                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}

                            formData={formData}
                            handleInputChange={handleInputChange}
                            handleSelectChange={handleSelectChange}

                            handleSubmit={handleSubmit}
                            handleClose={handleClose}
                        />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Produto;
