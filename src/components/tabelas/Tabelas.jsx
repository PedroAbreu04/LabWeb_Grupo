import React from 'react';
import base from "../../module.css/template/BaseDashboard.module.css"
import TitleBaseDashboard from '../template/HeaderDashboard'
import TableGrid from "./TableGrid";
import { useState, useEffect } from "react";
import axios from "axios";
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { styled } from '@mui/material/styles';


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

function Tabelas() {

    const [dados, setdados] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("");

    const dataTable = ( category ) => {
        let apiUrl = "";

        switch(category) {
            case 'products':
                apiUrl = 'https://api-fatec.onrender.com/api/v1/product';
            break;

            case 'customers':
                apiUrl = 'https://129.148.27.50/api/cliente';
            break;

            case 'sales':
                apiUrl = 'https://129.148.27.50/api/pedido';
            break;
            
            case 'carts':
                apiUrl = 'https://129.148.27.50/api/carrinho';
            break;
        }

        axios(apiUrl)
            .then(async (response) => {
                let data = await response.data;
                setdados(data)
            })
            .catch((error) => {
                console.error('Erro ao consumir a API:', error);
            });
    };

    const handleSelectChange = (e) => {
        const { value } = e.target;
        setdados(null);
        setSelectedCategory(value)
        dataTable(value);
    };

    return (
        <div className={base.background}>
            <TitleBaseDashboard title={'Tabelas'} />

            <div className={`${base.content} ${base.flip}`} >
                <div className={base.cards}>
                        <FormControl sx={{ width: '100%', marginTop: '8px' }}>
                            <InputLabel id="label-select" sx={{ color: 'white' }}> Categoria </InputLabel>
                            <CssSelect
                                label="Categoria"
                                name="category"
                                onChange={handleSelectChange}
                                required
                                value={selectedCategory}
                                sx={{ color: 'white' }}
                                fullWidth
                            >
                                <MenuItem value={'products'}>Produtos</MenuItem>
                                <MenuItem value={'sales'}>Vendas</MenuItem>
                                <MenuItem value={'carts'}>Carrinhos</MenuItem>
                                <MenuItem value={'customers'}>Clientes</MenuItem>
                                <MenuItem value={'employees'} disabled={true}>Funcionários</MenuItem>
                            </CssSelect>
                        </FormControl>

                        {dados != null &&
                            <TableGrid
                                data={dados}
                                category={selectedCategory}
                            />
                        }
                </div>
            </div>
        </div>
    );
}

export default Tabelas;
