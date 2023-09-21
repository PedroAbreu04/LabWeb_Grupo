import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

import styles from "../../module.css/template/BaseDashboard.module.css"

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


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'rgb(22, 27, 34)',
    width: 400,
    height: '80%',
    boxShadow: 24,
    borderRadius: '25px',
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
    paddingBottom: '10px',
}



export default function AddCliente({ title }) {
    // Modal - Ignore
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Form Data 
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phonenumber: '',
        birthdate: '',
        email: '',
        gender: '',
        password: '',
    });

    return (
        <>
            <div className={styles.div_btn_add}>
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
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Cadastrar {title}
                    </Typography>

                    <Typography id="modal-modal-description" sx={{ mt: 3 }}>
                            <form className={styles.form}>

                                <CssTextField
                                    label="Nome"
                                    name="name"
                                    fullWidth
                                    required
                                    sx={inputStyle}
                                    onChange={handleInputChange}
                                />
                                <CssTextField
                                    label="Endereço"
                                    name="address"
                                    fullWidth
                                    required
                                    sx={inputStyle}
                                    onChange={handleInputChange}
                                />
                                <CssTextField
                                    label="Número de Telefone"
                                    name="phonenumber"
                                    fullWidth
                                    required
                                    sx={inputStyle}
                                    onChange={handleInputChange}
                                />

                                <CssTextField
                                    label="Data de Aniversário"
                                    name="birthdate"
                                    fullWidth
                                    required
                                    sx={inputStyle}
                                    onChange={handleInputChange}
                                />

                                <CssTextField
                                    label="Email"
                                    name="email"
                                    fullWidth
                                    required
                                    sx={inputStyle}
                                    onChange={handleInputChange}
                                />

                                <CssTextField
                                    label="Sexo"
                                    name="gender"
                                    fullWidth
                                    required
                                    sx={inputStyle}
                                    onChange={handleInputChange}
                                />

                                <CssTextField
                                    label="Senha"
                                    name="password"
                                    fullWidth
                                    required
                                    sx={inputStyle}
                                    onChange={handleInputChange}
                                />

                                <div className={styles.btnSubmit}>
                                    <Button sx={buttonCloseStyle} onClick={handleClose}>
                                        <CloseIcon />
                                    </Button>

                                    <Button sx={buttonConfirmStyle} onClick={() => { console.log(formData) }} >
                                        <CheckIcon />
                                    </Button>
                                </div>
                            </form>
                    </Typography>
                </Box>
            </Modal>
        </>
    );
}
