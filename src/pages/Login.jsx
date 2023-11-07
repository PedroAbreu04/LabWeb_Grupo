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

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const wrongLogin = useRef();
  const content = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function login(e) {
    e.preventDefault();

    const url = "https://api-login-cdv6.onrender.com/api/v1/auth/login";

    axios
      .post(url, formData)
      .then( async (response) => {
        let data = response.data
        localStorage.setItem("token", data.token);
        content.current.className = `${styles.content} ${styles.flip}`;
        window.location.href = "/dashboard";
      })
      .catch((error) => {
        wrongLogin.current.innerHTML = error.response.data.message;
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

      <div className={styles.content} ref={content}>
        <div className={styles.login}>
          <form onSubmit={login}>

            <img src="/images/logo-letter.png" />
            
            <CssTextField
              label="Email"
              name="email"
              fullWidth
              onChange={handleInputChange}
              value={formData.email}
              required
            />

            <CssTextField
              label="Senha"
              name="password"
              type="password"
              fullWidth
              onChange={handleInputChange}
              value={formData.password}
              required
            />

            <span
              id="messageError"
              className={styles.messageError}
              ref={wrongLogin}
            ></span>

            <button type="submit" className={styles.btn_login}>
              Entrar
            </button>

            <div className={styles.resetPassword}>
              <a href="#"> Esqueceu sua senha? </a> 
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
