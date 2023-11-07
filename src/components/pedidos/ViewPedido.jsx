import { useParams } from "react-router-dom";
import styles from "../../module.css/pedidos/ViewPedido.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import base from "../../module.css/template/BaseDashboard.module.css";
import TitleBaseDashboard from "../template/HeaderDashboard";
import NoPerm from "../NoPerm";

import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Carrousel from "../produtos/Carrousel";

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

const CssSelect = styled(Select)({
  "& .MuiSelect-icon": {
    color: "rgb(255, 255, 255, 0.5) ",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderWidth: "1px !important",
    borderColor: "rgb(255, 255, 255, 0.5) !important",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderWidth: "2px !important",
    borderColor: "rgba(2, 175, 255, 0.8) !important",
  },
});

function ViewPedido({ role }) {
  const { id } = useParams();

  const [dados, setdados] = useState([]);
  const [attStatus, setAttStatus] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [status, setStatus] = useState();

  const [isNoPermVisible, setIsNoPermVisible] = useState(false);
  const onCloseModal = () => {
    setIsNoPermVisible(false);
  };

  const getPosts = async () => {
    try {
      const response = await axios.get(
        `https://129.148.27.50/api/pedido/${id}`
      );
      setdados(response.data);

      const resposta = await axios.get(
        `https://129.148.27.50/api/pedido/status/${id}`
      );
      setAttStatus(resposta.data);

      for (let obj in resposta.data) {
        if (resposta.data[obj].status_currently == true) {
          setStatus(resposta.data[obj].status);
          break;
        }
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const handleSelectChange = async (e) => {

    if (role != "ADMIN") {
      setIsNoPermVisible(true);
      return
    }

    const { value } = e.target;
    setStatus(value);

    try {
      setIsLoading(true);
      await axios.put(`https://129.148.27.50/api/pedido/update/${id}`, {
        status: value,
      });
      console.log("feito");
      getPosts();
    } catch (e) {
      console.log(e);
    }

  };

  if (isLoading) {
    return <div className={base.spinner}></div>;
  }

  return dados.map((data) => (
    <div className={base.background} key={data.id}>
      <TitleBaseDashboard title={"Pedidos"} />

      <div className={base.content}>
        <div className={styles.container_1}>
          <div className={styles.div_info}>

            <div>
              <Carrousel data={data.sale_items} condition={'pedido'} />
            </div>
            <div className={styles.border}>
              <h3>Atualizar Status:</h3>
              <FormControl fullWidth sx={{ marginBottom: "10px" }}>
                <InputLabel id="label-select" sx={{ color: "white" }}>
                  Status
                </InputLabel>
                <CssSelect
                  label="Status"
                  name="status"
                  onChange={handleSelectChange}
                  required
                  value={status}
                  sx={{ color: "white" }}
                >
                  {attStatus.map((aux) => {
                    return (
                      <MenuItem
                        key={aux.status}
                        value={aux.status}
                        disabled={aux.active_to_pass ? false : true}
                      >
                        {aux.status_text}
                      </MenuItem>
                    );
                  })}
                </CssSelect>
              </FormControl>
            </div>

            <CssTextField
              label="ID Pedido"
              name="id"
              fullWidth
              value={data.id ? data.id : "Não informado"}
            />

            <CssTextField
              label="Nome Cliente"
              name="customer_name"
              fullWidth
              value={data.customer_name ? data.customer_name : "Não informado"}
            />

            <CssTextField
              label="Id do Cliente"
              name="customer_id"
              fullWidth
              value={data.customer_id ? data.customer_id : "Não informado"}
            />

            <CssTextField
              label="Tipo de Pagamento"
              name="payment_type"
              fullWidth
              value={data.payment_type ? data.payment_type : "Não informado"}
            />

            <CssTextField
              label="Desconto"
              name="payment_discount"
              fullWidth
              value={
                data.payment_discount ? data.payment_discount : "Não informado"
              }
            />

            <CssTextField
              label="Total"
              name="total"
              fullWidth
              value={data.total ? data.total : "Não informado"}
            />
          </div>
        </div>
      </div>

      {isNoPermVisible && <NoPerm onClose={onCloseModal} />}
    </div>
  ));
}

export default ViewPedido;
