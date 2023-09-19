import axios from "axios";
import {useEffect } from "react";

export const Auth = () => {

  const jsonToken = {
    token: localStorage.getItem("token"),
  }

  const getPosts = async () => {
    try {
        const response = await axios.post("https://api-login-cdv6.onrender.com/api/v1/auth/token", jsonToken);
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
};

useEffect(() => {
    getPosts();
}, []);
}