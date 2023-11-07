import { useParams } from "react-router-dom";
import styles from "../../module.css/usuarios/ViewUsuario.module.css";
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

function ViewUsuario({ role }) {
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

        let headers = {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Adicione o cabeçalho de autenticação
        }

        await axios.get(`https://api-login-cdv6.onrender.com/api/v1/user/${id}`, { headers })
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

    const handleSelectChange = async (e) => {

        if (role != "ADMIN") {
            setIsNoPermVisible(true);
            return
        }

        const { value } = e.target;
        setStatus(value);

        try {
            setIsLoading(true);
            await axios.get(`https://api-login-cdv6.onrender.com/api/v1/user/${id}`, {
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

    return (
        <div className={base.background} >
            <TitleBaseDashboard title={"Usuários"} />

            <div className={base.content}>
                <div className={styles.container_1}>

                    <div className={styles.div_info}>

                        <div className={styles.div_img}>
                            <img alt='img_user' src={dados.imgPath} />
                        </div>

                        <CssTextField
                            label="ID Pedido"
                            name="id"
                            fullWidth
                            value={dados.id ? dados.id : "Não informado"}
                        />


                        <CssTextField
                            label="Nome"
                            name="name"
                            fullWidth
                            value={dados.name ? dados.name : "Não informado"}
                        />

                        <CssTextField
                            label="Nome de usuário"
                            name="profile"
                            fullWidth
                            value={dados.profile ? dados.profile : "Não informado"}
                        />

                        <CssTextField
                            label="Email"
                            name="email"
                            fullWidth
                            value={dados.email ? dados.email : "Não informado"}
                        />

                        <CssTextField
                            label="Permissão"
                            name="role"
                            fullWidth
                            value={
                                dados.role ? dados.role : "Não informado"
                            }
                        />

                        <CssTextField
                            label="Status"
                            name="status"
                            fullWidth
                            value={dados.active ? ((dados.active == 1) ? 'Ativo' : 'Inativoe') : "Não informado"}
                        />
                    </div>
                </div>
            </div>

            {isNoPermVisible && <NoPerm onClose={onCloseModal} />}
        </div>
    );
}

export default ViewUsuario;
