import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import styles from "../../module.css/config/Config.module.css";

import base from "../../module.css/template/BaseDashboard.module.css";

import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

import { styled } from "@mui/material/styles";

const CssTextField = styled(TextField)({
  "& label": {
    color: "rgba(255, 255, 255, 0.7)",
  },
  "& .MuiInputBase-input": {
    color: "rgba(128, 128, 128)",
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
  margin: "15px 0"
}

function Config() {
  const [dados, setdados] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      const response = await axios.get(
        "https://api-login-cdv6.onrender.com/api/v1/auth/token",
        { headers }
      );

      const resposta = await axios.get(
        `https://api-login-cdv6.onrender.com/api/v1/user/${response.data.id}`,
        { headers }
      );
      console.log(resposta.data);
      setdados(resposta.data);

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
    <div className={styles.container}>
      <div className={styles.cima}>
        <h1>Seu Perfil</h1>
        <div>
          <img src="https://www.gov.br/cdn/sso-status-bar/src/image/user.png" alt="" />
        </div>
      </div>
      <div className={styles.baixo}>
        <h2>Informações Pessoais</h2>
        <hr />
        <div className={styles.imput}>
          <CssTextField
            label="ID"
            name="id"
            fullWidth
            sx={padding}
            value={dados.id ? dados.id : "Não informado"}
          />
          <CssTextField
            label="Nome"
            name="id"
            fullWidth
            sx={padding}
            value={dados.name ? dados.name : "Não informado"}
          />
          <CssTextField
            label="E-mail"
            name="id"
            fullWidth
            sx={padding}
            value={dados.email ? dados.email : "Não informado"}
          />
        </div>
        <div className={styles.botoes}>
          <button className={styles.salva}>Salva Alteração</button>
          <button className={styles.descarta}>Descarta Alteração</button>
        </div>
      </div>
    </div>
  );
}

//https://api-login-cdv6.onrender.com/api/v1/user

export default Config;
