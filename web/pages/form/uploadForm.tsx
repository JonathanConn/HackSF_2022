import styles from '../../styles/Home.module.css'
import { useState } from "react";

export default function UploadForm() {

    const [image, setImage] = useState<File>();

    const uploadToClient = async (event: any) => {
        setImage(event.target.files[0]);
    }

    const uploadToServer = async (event: any, id: any) => {
        // event.preventDefault();
        const body = new FormData();
        body.append("file", image!);
        body.append("field", id);

        await fetch("/api/mint/uploadImg", {
            method: "POST",
            body
          });

    }

    return (

        <form onSubmit={uploadToServer}>
            <input id="images" type="file" onChange={uploadToClient} className={styles.card} />
            <br></br>
            <button className={styles.center}>Upload</button>
        </form>

    )
}

