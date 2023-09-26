import React from 'react';

import Button from '@mui/material/Button';


import { useEffect, useState } from "react";
import { Form, useParams } from 'react-router-dom';
import axios from 'axios';

import base from "../../module.css/template/BaseDashboard.module.css";
import styles from "../../module.css/produtos/Produto.module.css";
import FormProduto from './FormProduto';

function Produto() {
    const aux = 0;
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [categorys, setCategorys] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

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
        name: '',
        desc: '',
        brand: '',
        price: '',
        stock: '',
        height: '',
        unity: '',
        width: '',
        weight: '',
        id_categoria: {},
        images: [],
        img1: '',
        img2: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const jsonData = {
                // name: formData.name,
                desc: formData.desc,
                brand: formData.brand,
                price: parseFloat(formData.price),
                stock: parseInt(formData.stock),
                width: parseFloat(formData.width),
                unity: formData.unity,
                weight: parseFloat(formData.weight),
                height: parseFloat(formData.height),
                id_categoria: parseInt(formData.id_categoria),
                images: [{ image: formData.img1 }, { image: formData.img2 }]
            };

            const response = await axios.put(`https://api-fatec.onrender.com/api/v1/product/${id}`, jsonData);
            
            console.log(response.data)

            setTimeout(function () {
                dataTable();
                setIsLoading(false);
            }, 1500);

        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    };

    const dataTable = async () => {
        setIsLoading(true);

        const apiUrl = `https://api-fatec.onrender.com/api/v1/product/${id}`;

        await axios(apiUrl)
            .then(async (response) => {
                if (response.status == 200) {
                    // setSelectedCategory(response.data.id_categoria.id)
                    // setIsLoading(false);
                    // var apiData = response.data;
                    // var updatedFormData = { ...formData };
                    // var mergedFormData = { ...updatedFormData, ...apiData };
                    // setFormData(mergedFormData);

                    let data = await response.data;

                    formData.name = '';
                    formData.desc = data.desc;
                    formData.unity = data.unity;
                    formData.weight = data.weight;
                    formData.height = data.height;
                    formData.width = data.width;
                    formData.brand = data.brand;
                    formData.price = data.price;
                    formData.stock = data.stock;
                    formData.id_categoria = data.id_categoria.id;
                    formData.img1 = data.images[0].image_path;
                    formData.img2 = data.images[1].image_path;

                    setSelectedCategory(data.id_categoria.id)
                    setIsLoading(false);

                    console.log(formData)
                }
            })
            .catch((error) => {
                console.error('Erro ao consumir a API:', error);
            });
    };

    const getCategory = () => {
        const apiUrl = 'https://api-fatec.onrender.com/api/v1/category';
        axios(apiUrl)
            .then((response) => {
                setCategorys(response.data);
            })
            .catch((error) => {
                console.error('Erro ao consumir a API:', error);
            });
    };

    useEffect(() => {
        dataTable()
        getCategory()
    }, []);

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
                        {formData.img1.length > 0 ? (
                            <img alt="Produto" src={`${formData.img1}`} />
                        ) : (
                            <img alt="Produto" src='/images/img_product.png' className={styles.noImgProduct} />
                        )}
                    </div>

                    <div className={styles.infoProducts}>

                        <FormProduto
                            typeForm={'update'}
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
