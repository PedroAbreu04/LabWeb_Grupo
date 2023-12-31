import React from 'react';

import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Carrousel from './Carrousel'
import axios from 'axios';

import base from "../../module.css/template/BaseDashboard.module.css";
import styles from "../../module.css/produtos/Produto.module.css";
import FormProduto from './FormProduto';
import NoPerm from '../NoPerm';


function Produto({ role }) {
    const [swiperKey, setSwiperKey] = useState(0); // Inicialize a chave como um estado

    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [categorys, setCategorys] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedFiles, setSelectedFiles] = useState([]);

    const [isNoPermVisible, setIsNoPermVisible] = useState(false);
    const onCloseModal = () => {
        setIsNoPermVisible(false);
    };

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
    });

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (role != "ADMIN") {
            setIsNoPermVisible(true)
            return
        }

        setIsLoading(true);

        try {
            const jsonData = {
                name: formData.name,
                desc: formData.desc,
                brand: formData.brand,
                price: parseFloat(formData.price),
                stock: parseInt(formData.stock),
                width: parseFloat(formData.width),
                unity: formData.unity,
                weight: parseFloat(formData.weight),
                height: parseFloat(formData.height),
                category_id: parseInt(formData.category_.id),
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
                    let data = await response.data;
                    setFormData({ ...data });
                    setSelectedCategory(data.category_.id)
                    setIsLoading(false);
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
                        <Carrousel swiperKey={swiperKey} data={formData.images} condition={'produto'} />
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
            {isNoPermVisible && <NoPerm onClose={onCloseModal} />}
        </div>
    );
}

export default Produto;
