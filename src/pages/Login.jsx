import styles from '../module.css/Login.module.css'
function Login() {

  function login() {
    const url = "https://api-login-cdv6.onrender.com/api/v1/auth/login";

    let email = document.getElementById("email");
    let senha = document.getElementById("senha");
    let messageError = document.getElementById("messageError");

    if (email.value === "" || senha.value === "") {
      messageError.innerHTML = "Campos email e/ou senha estão vazios!";
    } else {
      let dados = {
        email: email.value,
        password: senha.value,
      };

      let dadosJSON = JSON.stringify(dados);

      let requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: dadosJSON,
      };

      const url = 'https://api-login-cdv6.onrender.com/api/v1/auth/login';

      fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.statusCode === 401) {
          messageError.innerHTML = data.message;
        } else {
          window.location.href = '/dashboard';
        }
      });
    }
  }


  return (
    <div className={styles.main_login}>
      <div className={styles.login}>

        <h1>Login</h1>

        <div className={styles.textefield}>
          <input type="text" id="email" name="email" placeholder="Email" />
        </div>

        <div className={styles.textefield}>
          <input type="password" id="senha" name="senha" placeholder="Senha" />
        </div>

        <span id="messageError" className={styles.messageError}></span>

        <button onClick={login} className={styles.btn_login}>Entrar</button>
      </div>

      <div className={styles.right_login}>
        <img
          src="/images/img_login.svg"
          className={styles.img_login}
          alt="Pessoa abrindo uma porta"
        />
      </div>
    </div>
  );
}

export default Login;
