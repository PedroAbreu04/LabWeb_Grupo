import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import {
    Modal,
    Typography,
    Button,
    Box,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import styles from "../../module.css/produtos/AddProduto.module.css";
import base from "../../module.css/template/BaseDashboard.module.css";
import FormUsuario from "./FormUsuario";
import NoPerm from "../NoPerm";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "rgb(22, 27, 34)",
    width: 550,
    height: "80%",
    boxShadow: 24,
    borderRadius: "15px",
    p: 4,
    color: "white",
    fontFamily: "Hanuman",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
        width: "8px",
    },
    "&::-webkit-scrollbar-thumb": {
        backgroundColor: "rgb(182, 178, 178, 0.5)",
        borderRadius: "6px",
        width: "6px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "rgb(182, 178, 178, 0.8)",
    },

    "@media (max-width: 767px)": {
        width: "90%",
    },
};

const styleNot = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    width: "300px",
    height: "200px",
    backgroundColor: "rgb(22, 27, 34)",
    flexDirection: "column",
    textAlign: "center",
    borderRadius: "15px",
    padding: "10px 0",
};

const buttonAddStyle = {
    backgroundColor: "rgb(34, 143, 34)",
    borderRadius: "15px",
    border: "0px",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
        backgroundColor: "rgb(34, 143, 34, 0.7)",
    },
};

export default function AddCliente({ title, refreshUsuarios, role }) {

    //  Modal - Ignore

    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isNoPermVisible, setIsNoPermVisible] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //  Form Data
    const [formData, setFormData] = useState({
        name: "",
        profile: "",
        email: "",
        role: "",
    });

    const onCloseModal = () => {
        setIsNoPermVisible(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Funciton Add Product

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        let jsonData = {
            name: formData.name,
            profile: formData.profile,
            email: formData.email,
            role: formData.role,
            active: true,
            password: '123',
            imgPath: "https://img.free.com/imgProfile"
        };

        let headers = {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        }

        await axios.post("https://api-login-cdv6.onrender.com/api/v1/user", jsonData, { headers })
            .then(async (response) => {
                let data = await response.data;
                setTimeout(function () {
                    refreshUsuarios();
                    setIsLoading(false);
                    handleClose();
                }, 3000);
            })
            .catch((error) => {
                console.log(error)
                setIsLoading(false);
            });
    };

    return (
        <>
            <div className={base.div_btn_add}>
                <Button
                    onClick={() => {
                        if (role === "ADMIN") {
                            handleOpen();
                        } else {
                            setIsNoPermVisible(true);
                        }
                    }}
                    className={styles.btn_add}
                    sx={buttonAddStyle}
                >
                    <AddIcon />
                </Button>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        component="h1"
                        style={{ width: "100%", textAlign: "center", fontSize: "24px" }}
                    >
                        Cadastrar {title}
                    </Typography>

                    <div
                        id="modal-modal-description"
                        sx={{ mt: 3 }}
                        className={isLoading ? styles.loading : ""}
                    >
                        <FormUsuario
                            typeForm={"save"}
                            formData={formData}
                            handleInputChange={handleInputChange}
                            handleSubmit={handleSubmit}
                            handleClose={handleClose}

                        />
                    </div>
                </Box>
            </Modal>

            {isNoPermVisible && <NoPerm onClose={onCloseModal} />}

        </>
    );
}
