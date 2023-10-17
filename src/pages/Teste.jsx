import { useEffect, useState } from "react";
import axios from 'axios';

function Teste() {

    const dataTable = async () => {
        const apiUrl = `https://129.148.27.50/api/carrinho/add/item/17`;
        let body = {"product_id" : 29};

        await axios.put(apiUrl, body)
            .then(async (response) => {
                let data = await response.data;
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        dataTable()
    }, []);


    return (
        "Pagina para Testes"
    );
}

export default Teste; 