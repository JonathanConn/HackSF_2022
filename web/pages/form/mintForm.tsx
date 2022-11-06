import styles from '../../styles/Home.module.css'
var crypto = require("crypto");
import { useState } from "react";

const BASE_URI = 'https://invaders.mypinata.cloud/ipfs/'

export default function MintForm() {
    const [image, setImage] = useState<File>();

    const mintProcess = async (event: any) => {
        event.preventDefault();

        const id = crypto.randomBytes(20).toString('hex');

        let metadata = {
            id: id,
            data: {
                name: event.target.name.value,
                number: event.target.number.value,
                image: '',
            },

        };

        console.log('upload to server')
        uploadToServer(event, id) // server => local filepath
            .then((pngPath) => {

                console.log('upload to ipfs')
                IPFS(pngPath) // server -> ipfs => ipfs ccid
                    .then((pngccid) => {
                        
                        metadata.data.image = `${BASE_URI}${pngccid.IpfsHash}`;
                        
                        console.log('gen metadata')
                        genMetaFile(metadata)
                        .then( (metaPath) => {
                                console.log('upload metadata to ipfs')

                                IPFS(metaPath)
                                .then( (metaccid) => {
                                    console.log(`${BASE_URI}${metaccid.IpfsHash}`);
                                    
                                })
                            }
                        ) 


                    })
            })
           


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
        // fetch(`http://localhost:3000/api/utils/writeMeta`, {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(metadata),
        // })
        //     .then(() => {
        //         fetch(`http://localhost:3000/api/mint/IFPS`, { // upload metadata to ipfs
        //             method: 'POST',
        //             headers: { 'Content-Type': 'application/json' },
        //             body: JSON.stringify(metadata),
        //         })
        //     })

        //     // })
        //     .catch((e) => { console.log(e) });

    }

    const genMetaFile = async (metadata: any) => {
        const res = await fetch(`http://localhost:3000/api/utils/writeMeta`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(metadata),
            })
        const data = await res.json();
        return data.path;
    }

    const IPFS = async (filepath: string) => {
        const name = filepath.substr(0, filepath.lastIndexOf('/') + 1);
        const axios = await fetch(`http://localhost:3000/api/mint/IPFS`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({path: filepath, name: name}),
        })
        const data = await axios.json();
        return data;
    }

    const uploadToClient = async (event: any) => {
        setImage(event.target.files[0]);
    }

    const uploadToServer = async (event: any, id: any) => {
        const body = new FormData();
        body.append("file", image!);
        body.append("field", id);

        const filepath = await fetch("/api/utils/uploadImg", {
            method: "POST",
            body
        });
        
        const data = await filepath.json();
        return data.path;

    }


    return (

        <form onSubmit={mintProcess}>
            <input id="name" type="text" placeholder="Name" className={styles.card}></input><br></br>
            <input id="number" type="text" placeholder="Phone #" className={styles.card}></input><br></br>
            <input id="images" type="file" onChange={uploadToClient} className={styles.card} />
            <button className={styles.center}>Mint</button>
        </form>

    )
}

