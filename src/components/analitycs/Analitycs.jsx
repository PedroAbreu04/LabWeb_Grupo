import React, { useRef, useEffect, useState } from 'react';
import base from "../../module.css/template/BaseDashboard.module.css"
import TitleBaseDashboard from '../template/HeaderDashboard'
import styles from '../../module.css/analitycs/analitycs.module.css';
import BarGrapich from './BarGrapich'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { styled } from '@mui/material/styles';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import axios from 'axios'

const CssDatePicker = styled(DatePicker)({
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
    },
    '& .MuiSvgIcon-root': {
        color: 'white',
    },
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

function Analitycs() {

    const [isLoading, setIsLoading] = useState(false);
    const [wGrapich, setWGrapich] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [data, setData] = useState({ category: '', from: '', to: '' });
    const [dataGrapich, setDataGrapich] = useState(null);
    const divGrapich = useRef(null);

    function handleResize() {
        if (divGrapich.current) {
            const width = divGrapich.current.offsetWidth - 75;
            setWGrapich(width);
        }
    }

    const handleSelectChange = (e) => {
        const { name, value } = e.target;
        setSelectedCategory(value);
        setData({ ...data, [name]: value })
    };

    const handleDateChange = (name) => (date) => {
        let month = (date.$M + 1 < 10) ? `0${date.$M + 1}` : `${date.$M + 1}`;;
        let year = date.$y;

        setData({ ...data, [name]: `${month}-${year}` })
    };

    const handleClickButton = async () => {
        const apiUrl = 'https://129.148.27.50/api/dados/data';
        await axios.post(apiUrl, data)
            .then(async (response) => {
                let data = await response.data
                setDataGrapich(data)
            })
            .catch((error) => {
                console.error('Erro ao consumir a API:', error);
            });
    };


    useEffect(() => {
        if (divGrapich.current) {
            const width = divGrapich.current.offsetWidth - 75;
            setWGrapich(width);
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };


    }, [divGrapich]);


    if (isLoading) {
        return (
            <div className={base.spinner}></div>
        );
    }

    return (
        <div className={base.background} >
            <TitleBaseDashboard title={'Analitycs'} />

            <div className={`${base.content} ${base.flip}`} >
                <div className={base.cards}>
                    <div className={styles.div_date}>
                        <div className={styles.input}>
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
                                    <MenuItem value={'employees'}>Funcionários</MenuItem>
                                </CssSelect>
                            </FormControl>
                        </div>

                        <div className={styles.input}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}  >
                                    <CssDatePicker
                                        name={'from'}
                                        label={'De'}
                                        views={['month', 'year']}
                                        onChange={handleDateChange('from')}
                                        sx={{ width: '100%' }}
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                        </div>
                        <div className={styles.input}>
                            <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ width: '100%' }}>
                                <DemoContainer components={['DatePicker']}>
                                    <CssDatePicker
                                        name={'to'}
                                        label={'Até'}
                                        views={['month', 'year']}
                                        onChange={handleDateChange('to')}
                                        sx={{ width: '100%' }}
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                        </div>

                        <div className={styles.divBtn}>
                            <button className={styles.btn} onClick={handleClickButton}>
                                ENVIAR
                            </button>
                        </div>
                    </div>

                    <div className={styles.grapich} ref={divGrapich}>
                        <h1> { data.category} </h1>
                        <BarGrapich
                            width= {'100%'}
                            dataGrapich={dataGrapich}
                            wGrapich={wGrapich}
                        />
                    </div>

                </div>
            </div>
        </div >
    );
}

export default Analitycs;

