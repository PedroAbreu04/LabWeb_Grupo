import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import dayjs from 'dayjs';

import {
    Modal,
    Typography,
    Button,
    Box,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import styles from "../../module.css/produtos/AddProduto.module.css";
import base from "../../module.css/template/BaseDashboard.module.css";
import FormCupom from "./FormCupom";
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

export default function AddCupom({ title, refreshCupons, role }) {

    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isNoPermVisible, setIsNoPermVisible] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //  Form Data
    const [formData, setFormData] = useState({
        code: "",
        desc: "",
        discount_value: "",
        validity: "",
    });

    const onCloseModal = () => {
        setIsNoPermVisible(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        const validityParts = formData.validity.split('/');
        const validityDate = new Date(`${validityParts[2]}-${validityParts[1]}-${validityParts[0]}`);

        let jsonData = {
            code: formData.code,
            desc: formData.desc,
            discount_value: formData.discount_value,
            validity: validityDate.toISOString().split('T')[0],
        };


        await axios.post("https://129.148.27.50/api/cupom/create", jsonData)
            .then(async (response) => {
                let data = await response.data;
                setTimeout(function () {
                    refreshCupons();
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
                        <FormCupom
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