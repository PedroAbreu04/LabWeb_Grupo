import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import base from "../../module.css/template/BaseDashboard.module.css";
import CardsUsuarios from "./CardsUsuarios";
import AddUsuario from "./AddUsuario";
import TitleBaseDashboard from "../template/HeaderDashboard";
import NoPerm from "../NoPerm";

function Usuarios( { role } ) {
  const [dados, setdados] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = async () => {

    let headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`, // Adicione o cabeçalho de autenticação
    }

    await axios.get("https://api-login-cdv6.onrender.com/api/v1/user", { headers })
      .then(async (response) => {
        let data = await response.data;
        setdados(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error)
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  if (isLoading) {
    return <div className={base.spinner}></div>;
  }

  if (role != 'ADMIN') {
    return <NoPerm onClose={() =>{}} />;
  }

  return (
    <div className={base.background}>
      <TitleBaseDashboard title={"Usuários"} />

      <div className={`${base.content} ${base.flip}`}>
        <div>
          <AddUsuario
            title={"Usuários"}
            refreshUsuarios={getPosts}
            role={role}
          />
        </div>
        <div className={base.cards}>
          <CardsUsuarios users={dados} />
        </div>
      </div>
    </div>
  );
}

export default Usuarios;
