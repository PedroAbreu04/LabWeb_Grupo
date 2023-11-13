import styles from "../../module.css/Login.module.css";
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

function ResetPassword() {
  const [formData, setFormData] = useState({ password: "" ,confirmPassword: "" });
  const wrongLogin = useRef();
  const rightLogin = useRef();

  const content = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const urlRoute = window.location.href;
  const token = urlRoute.split("password/forgot/")[1];
    
  let headers = {
    Authorization: `Bearer ${token}`, 
  }
  
  const urlEmail = "https://api-login-cdv6.onrender.com/api/v1/auth/tokenEmail";
    
  axios
  .get(urlEmail, {headers} )
  .then( async (response) => {
    if(response.data.validateToken === false){
      window.location.href = '/notFound'
    }
  });

  function reset(e) {
    e.preventDefault();
    
    const url = "https://api-login-cdv6.onrender.com/api/v1/user/changePassword";
    
    wrongLogin.current.style.display = 'none';
    rightLogin.current.style.display = 'none';

    if(formData.password !== formData.confirmPassword){
      wrongLogin.current.style.display = 'block';
      wrongLogin.current.innerHTML = 'As senhas são diferentes!';
    }else{
      axios
      .post(url, formData, {headers} )
      .then( async (response) => {
        rightLogin.current.style.display = 'block';
        rightLogin.current.innerHTML = '*Senha alterada com sucesso';
        setTimeout(function(){window.location.href = '/'}, 2000)
      })
      .catch((error) => {
        wrongLogin.current.style.display = 'block';
        wrongLogin.current.innerHTML = 'Não foi possível alterar senha';
      });
    }
   
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
          <form onSubmit={reset}>

            {/* <img src="/images/logo-letter.png" /> */}
            
            <h1>MUDAR SENHA</h1>

            <CssTextField
              label="Senha"
              name="password"
              type="password"
              fullWidth
              onChange={handleInputChange}
              value={formData.password}
              required
            />

            <CssTextField
              label="Confirme a senha"
              name="confirmPassword"
              fullWidth
              onChange={handleInputChange}
              value={formData.confirmPassword}
              type="password"
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
            
          </form>
        </div>
      </div>
    </>
  )
}

export default ResetPassword;