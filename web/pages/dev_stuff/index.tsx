import styles from '../../styles/Home.module.css'
import { useState } from "react";

export default function TesterForm() {

    const [uri, setURI] = useState('');

    const testPost = async (event: any) => {
        event.preventDefault();
        console.log(uri)
        const res = await fetch('/api/mint/baseURI', {
            method: 'POST',  
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({uri: uri}),
        })

        const data = await res.json();
        console.log(data);
        return data;
    }

    const testGet = async (event: any) => {
        event.preventDefault();
        const res = await fetch('/api/mint/baseURI', {
            method: 'GET',  
        })

        const data = await res.json();
        console.log(data);
        return data;
    }

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.grid}>

                    <form>
                        <input id="uri" type="text" value={uri} onChange={(e) => {
                            setURI(e.target.value);
                        }} className={styles.card}></input><br></br>
                        

                        <button onClick={testPost} className={styles.center}>POST</button><br></br><br></br>
                        <button onClick={testGet} className={styles.center}>GET</button>
                    </form>

                </div>
            </div>
        </main>

    )
}

