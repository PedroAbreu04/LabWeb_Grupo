import axios from "axios";
import { useEffect, useState } from "react";
import NotAuthenticated from "../pages/NotAuthenticated";

function PrivateRoutes({ component: Component, routeKey }) {

  const[isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const [dataUser, setDataUser] = useState();

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  };

   const authToken = async () => {
     try {
       const response = await axios.get("https://api-login-cdv6.onrender.com/api/v1/auth/token", config);
       setIsAuth(response.data.validateToken);
       setDataUser(response.data)
     } catch (error) {
       console.log(error.response.data.message);
     }

     setIsLoading(false);
   };

   useEffect(() => {
     authToken();
   }, [routeKey]);

  if (!isLoading) {
    return (isAuth) ? <Component role={dataUser.role} userImagePath={dataUser.imgPath}/> : <NotAuthenticated />
  }
}

export default PrivateRoutes;
