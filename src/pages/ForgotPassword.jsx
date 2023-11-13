import styles from "../module.css/Login.module.css";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState, useRef } from "react";
import axios from "axios";

const CssTextField = styled(TextField)({
  "& label": {
    color: "#FFF",
  },
  "& label.Mui-focused": {
    color: "rgba(2, 175, 255, 0.8)",
  },
  "& .MuiInputBase-input": {
    color: "#FFF",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "rgb(255, 255, 255, 0.5)",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgb(255, 255, 255, 0.5)",
    },
    "&:hover fieldset": {
      borderColor: "rgb(255, 255, 255, 0.5)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgba(2, 175, 255, 0.8)",
    },
  },
  "&::-webkit-autofill":{
    backgroundColor: "transparent !important"
  },
  "&::-webkit-autofill:focus":{
    backgroundColor: "transparent !important"
  }
  
});

function ForgotPassword() {
  const [formData, setFormData] = useState({ email: ""});
  const wrongLogin = useRef();
  const rightLogin = useRef();
  
  const content = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...forgot, [name]: value });
  };

  function forgot(e) {
    e.preventDefault();

    const url = "https://api-login-cdv6.onrender.com/api/v1/user/enviar-email";

    rightLogin.current.style.display = 'none';
    wrongLogin.current.style.display = 'none';
    axios
      .post(url, formData)
      .then( async (response) => {
        rightLogin.current.style.display = 'block';
        rightLogin.current.innerHTML = '*Foi enviado um email';
      })
      .catch((error) => {
        wrongLogin.current.style.display = 'block';
        wrongLogin.current.innerHTML = 'Não há nenhum usuário com este e-mail';
      });
  }

  return (
    <>
     <ul className={styles.circles}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
       <div className={styles.content}>
        <div className={styles.login}>
          <form onSubmit={forgot}>

            {/* <img src="/images/logo-letter.png" /> */}
            
            <h1>RECUPERAR SENHA</h1>
            <CssTextField
              label="Email"
              name="email"
              fullWidth
              onChange={handleInputChange}
              value={forgot.email}
              required
            />

            <span
              id="messageError"
              className={styles.messageError}
              ref={wrongLogin}
            ></span>

            <span
              id="messageSuccess"
              className={styles.messageSuccess}
              ref={rightLogin}
            ></span>


            <button type="submit" className={styles.btn_login}>
              Enviar
            </button>
            
            <div className={styles.resetPassword}>
              <a href="/"> Lembrou da senha? </a> 
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword;