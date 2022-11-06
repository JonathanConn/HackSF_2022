import styles from '../../styles/Home.module.css'
import { useState } from "react";
import UploadForm from './uploadForm';
import MintForm from './mintForm';


export default function Form() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <MintForm /> 
                </div>
                {/* <div className={styles.grid}>
                    <UploadForm />
                </div> */}
            </div>
        </main>

    )
}

