import React from 'react'

import { TextField, Select, MenuItem, InputAdornment, InputLabel, FormControl, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import EditNoteIcon from '@mui/icons-material/EditNote';
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
    categorys,

    selectedCategory,

    formData,
    handleInputChange,
    handleSelectChange,

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
                label="Descrição"
                name="desc"
                fullWidth
                required
                multiline
                minRows={5}
                maxRows={5}
                sx={inputStyle}
                onChange={handleInputChange}
                value={formData.desc}
            />

            <CssTextField
                label="Marca"
                name="brand"
                fullWidth
                required
                sx={inputStyle}
                onChange={handleInputChange}
                value={formData.brand}
            />

            <CssTextField
                label="Preço"
                name="price"
                fullWidth
                required
                InputProps={{
                    startAdornment: <InputAdornment position="start"> <small style={{ color: 'white' }} > R$  </small>  </InputAdornment>,
                }}
                sx={inputStyle}
                onChange={handleInputChange}
                value={formData.price}
            />

            <CssTextField
                label="Estoque"
                name="stock"
                fullWidth
                required
                InputProps={{
                    endAdornment: <InputAdornment position="start" > <small style={{ color: 'white' }} > un  </small> </InputAdornment>,
                }}
                sx={inputStyle}
                onChange={handleInputChange}
                value={formData.stock}
            />

            <CssTextField
                label="Unidade"
                name="unity"
                fullWidth
                required
                InputProps={{
                    endAdornment: <InputAdornment position="start"> <small style={{ color: 'white' }} > unity  </small>  </InputAdornment>,
                }}
                sx={inputStyle}
                onChange={handleInputChange}
                value={formData.unity}
            />

            <CssTextField
                label="Largura"
                name="width"
                fullWidth
                required
                InputProps={{
                    endAdornment: <InputAdornment position="start" > <small style={{ color: 'white' }} > cm  </small> </InputAdornment>,
                }}
                sx={inputStyle}
                onChange={handleInputChange}
                value={formData.width}
            />

            <CssTextField
                label="Peso"
                name="weight"
                fullWidth
                required
                InputProps={{
                    endAdornment: <InputAdornment position="start" > <small style={{ color: 'white' }} > kg  </small> </InputAdornment>,
                }}
                sx={inputStyle}
                onChange={handleInputChange}
                value={formData.weight}
            />

            <CssTextField
                label="Altura"
                name="height"
                fullWidth
                required
                InputProps={{
                    endAdornment: <InputAdornment position="start" > <small style={{ color: 'white' }} > cm  </small> </InputAdornment>,
                }}
                sx={inputStyle}
                onChange={handleInputChange}
                value={formData.height}
            />

            <FormControl fullWidth sx={{ marginBottom: '10px' }}>
                <InputLabel id="label-select" sx={{ color: 'white' }}>Categoria</InputLabel>
                <CssSelect
                    label="Categoria"
                    name="id_categoria"
                    onChange={handleSelectChange}
                    required
                    value={selectedCategory}
                    sx={{ color: 'white' }}
                >
                    {
                        categorys.map((category) => {
                            return (
                                <MenuItem key={category.id} value={category.id}>
                                    {category.name}
                                </MenuItem>
                            )
                        })
                    }
                </CssSelect>
            </FormControl>

            <CssTextField
                label="Url Imagem 1"
                name="img1"
                fullWidth
                required
                sx={inputStyle}
                onChange={handleInputChange}
                value={formData.img1}
            />

            <CssTextField
                label="Url Imagem 2"
                name="img2"
                fullWidth
                sx={inputStyle}
                onChange={handleInputChange}
                required
                value={formData.img2}
            />

            {/* <div className={ styles.div_file } >
        <input 
            type="file" 
            name="file" 
            hidden 
            aria-label="Upload"
            ref={fileInputRef}
            onChange={(e) => {
                const selectedFile = e.target.files[0];
                
                if (selectedFile) {
                    if (selectedFile.type === 'image/png' || selectedFile.type === 'image/jpeg') {
                      console.log('Arquivo selecionado:', selectedFile);
                    } else {
                      alert('Por favor, selecione uma imagem PNG ou JPEG.');
                      fileInputRef.current.value = '';
                    }
                  }
            }}
            style={{ marginBottom: '10px'}}
        />

        <div className={styles.btn_file} onClick={handleButtonClick}>
             <small>  Selecione a imagem do Produto </small>
        </div>

        <div className={styles.filesUpload}>
            <div className={styles.file}> 
                <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.samsung.com%2Fbr%2Fsmartphones%2Fgalaxy-m%2Fgalaxy-m53-5g-blue-128gb-sm-m536bzbkzto%2F&psig=AOvVaw0Fibnry2I100Yrm5v1my3D&ust=1695155249091000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMD0q8X_tIEDFQAAAAAdAAAAABAE' alt='img'/>
            </div>
        </div>
    </div> */}

            <div className={styles.btnSubmit}>
                <Button sx={buttonCloseStyle} onClick={handleClose}>
                    <CloseIcon />
                </Button>

                {typeForm == 'update' ? (
                    <Button sx={buttonEditSyle}>
                        <EditNoteIcon />
                    </Button>
                ) : null}

                <Button sx={buttonConfirmStyle} type='submit'>
                    <CheckIcon />
                </Button>
            </div>
        </form>
    )
}

export default FormProduto; 
