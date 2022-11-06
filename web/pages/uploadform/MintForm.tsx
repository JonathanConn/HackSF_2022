import styles from '../styles/Home.module.css'
import { useState } from "react";

var crypto = require("crypto");

const mintProcess = async (event: any) => {
    event.preventDefault();

    const id = crypto.randomBytes(20).toString('hex');

    let metadata = {
        id: id,
        name: event.target.name.value,
        number: event.target.number.value,
        filename: `./${id}.json`,
    };

    let imgdata = {
        id: id,
        file: event.target.images.value,
        filename: `./${id}.png`,
    };

    try {

        // console.log(event.target.images);
        // nft image
        // fetch(`http://localhost:3000/api/writeImg`, {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(imgdata),
        // })
        //     .then(() => {
        //         // fetch(`http://localhost:3000/api/ipfs`, {
        //         //     method: 'POST',
        //         //     headers: { 'Content-Type': 'application/json' },
        //         //     body: JSON.stringify(imgdata),
        //         // })
        //     })
        //     .then(() => {

        // nft metadata
        fetch(`http://localhost:3000/api/writeMeta`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(metadata),
        })
        .then(() => {
            fetch(`http://localhost:3000/api/ipfs`, { // upload metadata to ipfs
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(metadata),
            })
        })

            // })
            .catch((e) => { console.log(e) });

    } catch (err) {
        console.log(err);
    }
}

export default function Mint() {

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <form onSubmit={mintProcess}>
                        <input id="name" type="text" placeholder="Name" className={styles.card}></input><br></br>
                        <input id="number" type="text" placeholder="Phone #" className={styles.card}></input><br></br>
                        <input id="images" type="file" className={styles.card}></input><br></br>
                        <button className={styles.center}>Mint</button>
                    </form>
                </div>
            </div>
        </main>
    )
}

