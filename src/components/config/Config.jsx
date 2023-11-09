import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

import styles from "../../module.css/config/Config.module.css";

import base from "../../module.css/template/BaseDashboard.module.css";

import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Button,
  FormControl,
} from "@mui/material";

import { styled } from "@mui/material/styles";

const CssTextField = styled(TextField)({
  "& label": {
    color: "rgba(255, 255, 255)",
  },
  "& .MuiInputBase-input": {
    color: "rgba(255, 255, 255)",
  },
  "& label.Mui-focused": {
    color: "rgba(2, 175, 255, 0.8)",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "rgb(255, 255, 255, 0.5)",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.7)",
    },
    "&:hover fieldset": {
      borderColor: "rgb(255, 255, 255, 0.5)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgba(2, 175, 255, 0.8)",
    },
  },
});

const padding = {
  margin: "15px 0",
};

const buttonAddStyle = {
  backgroundColor: "rgb(34, 143, 34)",
  borderRadius: "15px",
  border: "0px",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  marginRight: "10px",
  "&:hover": {
    backgroundColor: "rgb(34, 143, 34, 0.7)",
  },
};

const buttonRemoveStyle = {
  backgroundColor: "rgb(255, 0, 0)",
  borderRadius: "15px",
  border: "0px",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  marginLeft: "10px",
  "&:hover": {
    backgroundColor: "rgb(200, 0, 34, 0.7)",
  },
};

function Config() {
  const [dados, setdados] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const imgElement = useRef();

  const randomImg = () => {
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let randomString = '';
  
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }
  
    formData.imgPath = `https://api.dicebear.com/7.x/micah/svg?seed=${randomString}`
    imgElement.current.src = formData.imgPath;
  }

  const [formData, setFormData] = useState({
    name: "",
    profile: "",
    email: "",
    role: "",
  });

  const headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const handleInputChange = (e) => {
      let { name, value } = e.target;
      setFormData({...formData, [name] : value})
  }

  const handleSubmit = async (e) => {
    try{
    const response =  await axios.put(
        `https://api-login-cdv6.onrender.com/api/v1/user/${formData.id}`, formData , {headers}
      );
      console.log(response)
    }catch(error){
      console.log(error);
    }
  }

  const getPosts = async () => {
    try {
      const response = await axios.get(
        "https://api-login-cdv6.onrender.com/api/v1/auth/token",
        { headers }
      );

      const resposta = await axios.get(
        `https://api-login-cdv6.onrender.com/api/v1/user/${response.data.id}`,
        { headers }
      );

      setFormData(resposta.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  if (isLoading) {
    return <div className={base.spinner}></div>;
  }

  return (
    <div className={base.background}>
      <div className={`${base.content} ${base.flip}`}>
        <div className={base.cards}>
          <div className={styles.container}>
            <div className={styles.cima}>
              <h1>Seu Perfil</h1>
              <div className={styles.div_img}>
                <img
                  ref={imgElement}
                  src={formData.imgPath}
                />
                <button className={styles.btnImg} onClick={randomImg}>Trocar Foto</button>
              </div>
            </div>
            <div className={styles.baixo}>
              <div className={styles.imput}>
                <h2>Informações Pessoais</h2>
                <FormControl fullWidth>
                  <CssTextField
                    label="ID"
                    name="id"
                    fullWidth
                    sx={padding}
                    // onChange={handleInputChange}
                    value={formData.id ? formData.id : "Não informado"}
                  />
                  <CssTextField
                    label="Nome"
                    name="name"
                    fullWidth
                    sx={padding}
                    required
                    onChange={handleInputChange}
                    value={formData.name ? formData.name : "Não informado"} // Usar o valor de formData.name apenas no modo de edição
                  />
                  <CssTextField
                    label="Profile"
                    name="profile"
                    fullWidth
                    sx={padding}
                    onChange={handleInputChange}
                    required
                    value={formData.profile ? formData.profile : "Não informado"}
                  />
                  <CssTextField
                    label="E-mail"
                    name="email"
                    fullWidth
                    sx={padding}
                    onChange={handleInputChange}
                    required
                    value={formData.email ? formData.email : "Não informado"}
                  />
                  <CssTextField
                    label="Role"
                    name="role"
                    fullWidth
                    sx={padding}
                    required
                    value={formData.role ? formData.role : "Não informado"}
                  />
                </FormControl>
              </div>
              <div className={styles.botoes}>

                <Button sx={buttonAddStyle} onClick={handleSubmit}>
                  <SaveIcon /> Salva Alteração
                </Button>
                <Button sx={buttonRemoveStyle} onClick={() => { window.location.href = "/dashboard";}}>
                  <DeleteIcon /> Descarta Alteração
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//https://api-login-cdv6.onrender.com/api/v1/user

export default Config;
