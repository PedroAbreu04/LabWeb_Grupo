import React from 'react'

import { TextField, Select, MenuItem, InputAdornment, InputLabel, FormControl, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styles from "../../module.css/produtos/AddProduto.module.css"

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

const buttonEditSyle = {
    backgroundColor: 'rgba(128, 128, 128)',
    borderRadius: '15px',
    width: '100px',
    border: '0px',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: 'rgba(128, 128, 128, 0.7)'
    }
};

const buttonConfirmStyle = {
    backgroundColor: 'rgb(34, 143, 34)',
    border: '0px',
    borderRadius: '15px',
    width: '100px',
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
    borderRadius: '15px',
    width: '100px',
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

function FormProduto({
    typeForm,
    formData,
    handleInputChange,
    handleSubmit,
    handleClose,
}) {

    return (
        <form className={styles.form} onSubmit={handleSubmit}>

            <CssTextField
                label="Nome"
                name="name"
                fullWidth
                required
                sx={inputStyle}
                multiline
                minRows={2}
                maxRows={2}
                onChange={handleInputChange}
                value={formData.name}
            />

            <CssTextField
                label="Nome de Perfil"
                name="profile"
                fullWidth
                required
                sx={inputStyle}
                onChange={handleInputChange}
                value={formData.profile}
            />

            <CssTextField
                label="Email"
                name="email"
                fullWidth
                required
                InputProps={{
                    endAdornment: <InputAdornment position="start" > <small style={{ color: 'white' }} > @  </small> </InputAdornment>,
                }}
                sx={inputStyle}
                onChange={handleInputChange}
                value={formData.email}
            />

            <FormControl fullWidth sx={{ marginBottom: '10px' }}>
                <InputLabel id="label-select" sx={{ color: 'white' }}>Categoria</InputLabel>
                <CssSelect
                    label="Categoria"
                    name="role"
                    onChange={handleInputChange}
                    required
                    value={formData.role}
                    sx={{ color: 'white' }}
                >
                    <MenuItem value={'ADMIN'}>
                        Administrador
                    </MenuItem>

                    <MenuItem value={'USER'}>
                        Usuário
                    </MenuItem>
                </CssSelect>
            </FormControl>

            <div className={styles.btnSubmit}>
                <Button sx={buttonCloseStyle} onClick={handleClose}>
                    <CloseIcon />
                </Button>

                <Button sx={buttonConfirmStyle} type='submit'>
                    <CheckIcon />
                </Button>
            </div>
        </form>
    )
}

export default FormProduto; 
