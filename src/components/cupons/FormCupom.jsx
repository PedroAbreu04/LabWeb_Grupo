import React from 'react'

import { TextField, Select, MenuItem, InputAdornment, InputLabel, FormControl, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styles from "../../module.css/cupom/AddCupom.module.css"
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const CssDatePicker = styled(DatePicker)({
    '& .MuiInputLabel-root': {
      color: '#FFF',
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'rgba(2, 175, 255, 0.8)',
    },
    '& .MuiInputBase-input': {
      color: '#FFF',
    },
    '& .MuiSvgIcon-root': {
      color: '#FFF', // Adicione esta linha para definir a cor do ícone
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
});

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

function FormCupom({
    formData,
    handleInputChange,
    handleSubmit,
    handleClose,
}) {

    return (
        <form className={styles.form} onSubmit={handleSubmit}>

            <CssTextField
                label="Código"
                name="code"
                fullWidth
                required
                sx={inputStyle}
                multiline
                minRows={2}
                maxRows={2}
                onChange={handleInputChange}
                value={formData.code}
            />

            <CssTextField
                label="Descrição"
                name="desc"
                fullWidth
                required
                sx={inputStyle}
                onChange={handleInputChange}
                value={formData.desc}
            />

            <CssTextField
                label="Desconto"
                name="discount_value"
                fullWidth
                required
                sx={inputStyle}
                onChange={handleInputChange}
                value={formData.discount_value}
            />

            <CssTextField
                label="Validade"
                name="validity"
                fullWidth
                required
                sx={inputStyle}
                onChange={handleInputChange}
                value={formData.validity}
            />

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

export default FormCupom; 
