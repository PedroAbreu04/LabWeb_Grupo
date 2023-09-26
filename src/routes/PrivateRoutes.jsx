import axios from "axios";
import { useEffect, useState } from "react";
import NotAuthenticated from "../pages/NotAuthenticated";

function PrivateRoutes({ component: Component, routeKey }) {

  // VERDADEIRO CÓDIGO. 
  // const [isLoading, setIsLoading] = useState(true);
  // const [isAuth, setIsAuth] = useState(false);
  
  const [isLoading, setIsLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(true);

  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${ localStorage.getItem("token") }` // Adiciona o token ao cabeçalho de autorização
  //   }
  // };

  // const authToken = async () => {
  //   try {
  //     const response = await axios.post("https://api-login-cdv6.onrender.com/api/v1/auth/token", config);
  //     setIsAuth(response.data.validateToken);
  //   } catch (error) {
  //     console.log(error.response.data.message);
  //   }

  //   setIsLoading(false);
  // };

  // useEffect(() => {
  //   authToken();
  // }, [routeKey]);

  if( !isLoading ) {
    return ( isAuth ) ? <Component /> : <NotAuthenticated />
  } 
}

export default PrivateRoutes;
