import axios from "axios";
import { useEffect, useState } from "react";
import NotAuthenticated from "../pages/NotAuthenticated";

function PrivateRoutes({ component: Component, routeKey }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  const jsonToken = {
    token: localStorage.getItem("token"),
  }

  const authToken = async () => {
    try {
      const response = await axios.post("https://api-login-cdv6.onrender.com/api/v1/auth/token", jsonToken);
      setIsAuth(response.data.validateToken);
    } catch (error) {
      console.log(error.response.data.message);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    authToken();
  }, [routeKey]);

  if( !isLoading ) {
    return ( isAuth ) ? <Component /> : <NotAuthenticated />
  } 
}

export default PrivateRoutes;
