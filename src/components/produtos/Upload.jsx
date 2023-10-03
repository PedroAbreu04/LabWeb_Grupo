
import styles from "../../module.css/produtos/AddProduto.module.css"

import React, { useRef  } from "react";
import FileUpload from "./FileUpload";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

function Upload( { selectedFiles, setSelectedFiles } ) {

    const fileInputRef = useRef();

    const uploadFile = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const deleteFile = (index) => {
        const updatedFiles = [...selectedFiles];
        updatedFiles.splice(index, 1);
        setSelectedFiles(updatedFiles);
    }

    return (
        <div className={styles.div_file} >
            <input
                type="file"
                name="file"
                hidden
                aria-label="Upload"
                ref={fileInputRef}
                onChange={(e) => {
                    const currentFile = e.target.files[0];

                    if (currentFile && selectedFiles.length < 5) {

                        if (currentFile.type === 'image/png' || currentFile.type === 'image/jpeg') {
                            console.log('Arquivo selecionado:', currentFile);

                            const reader = new FileReader();

                            reader.onload = () => {

                                currentFile.image = reader.result

                                setSelectedFiles([...selectedFiles, currentFile]);
                            };

                            reader.readAsDataURL(currentFile);

                            fileInputRef.current.value = '';
                        }
                    }
                }}
            />

            <div className={styles.btn_file} onClick={uploadFile} style={{ marginBottom: '10px' }} >
                <AddPhotoAlternateIcon sx={{ fontSize: '32px' }} />
                <small>  Selecione a imagem do Produto </small>
            </div>

            <div className={styles.filesUpload}>
                {selectedFiles.map((file, index) => (
                    <FileUpload
                        key={index}
                        name={file.name}
                        image={file.image}
                        size={file.size}
                        onDelete={ () => deleteFile(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Upload;