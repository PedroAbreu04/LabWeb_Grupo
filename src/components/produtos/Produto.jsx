import React from 'react';

import Button from '@mui/material/Button';


import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

import base from "../../module.css/template/BaseDashboard.module.css";
import styles from "../../module.css/produtos/Produto.module.css";
import FormProduto from './FormProduto';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

function Produto() {
    const [swiperKey, setSwiperKey] = useState(0); // Inicialize a chave como um estado

    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [categorys, setCategorys] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedFiles, setSelectedFiles] = useState([]);

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
                category_id: parseInt(formData.id_categoria),
                images: [{ image: formData.img1 }, { image: formData.img2 }]
            };

            const response = await axios.put(`https://api-fatec.onrender.com/api/v1/product/${id}`, jsonData);

            setTimeout(() => {
                setSwiperKey((prevKey) => prevKey + 1);
            }, 1500)

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
                    formData.id_categoria = data.category_.id;
                    formData.images = data.images
                    formData.img1 = data.images[0].image_path;
                    formData.img2 = data.images[1].image_path;

                    setSelectedCategory(data.category_.id)
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
    }, [swiperKey]);

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

                    <div className={styles.divSlider}>
                        <Swiper
                            key={swiperKey}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            navigation
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                        >
                            {formData.images.map((image) => (
                                <SwiperSlide key={image.id}>
                                    <div className={styles.divImg}>
                                        <img
                                            alt="img"
                                            src={image.image_path}
                                            className={styles.img}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
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

                            selectedFiles={selectedFiles}
                            setSelectedFiles={setSelectedFiles}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Produto;
