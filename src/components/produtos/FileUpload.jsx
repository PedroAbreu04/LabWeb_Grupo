import styles from "../../module.css/produtos/AddProduto.module.css"
import DeleteIcon from '@mui/icons-material/Delete';

function FileUpload({ name, size, image, onDelete}) {

    return (
        <div className={styles.file}>
            <img src={image} alt='img' />

            <div className={styles.infoFiles}>
                <p className={styles.fileName}> { name } </p>
                <p className={styles.fileSize}> { (size / 1024).toFixed(2) } KB </p>
            </div>

            <div className={styles.deleteFile} onClick={onDelete}>
                <DeleteIcon />
            </div>

        </div>
    );
}

export default FileUpload;