import styles from '../../styles/Home.module.css'
var crypto = require("crypto");
import { useState } from "react";

const BASE_URI = 'https://hndshk.mypinata.cloud/ipfs/'

export default function MintForm() {
    const [image, setImage] = useState<File>();

    const mintProcess = async (event: any) => {
        event.preventDefault();

        const id = crypto.randomBytes(20).toString('hex');

        let metadata = {
            id: id,
            data: {
                addr: event.target.addr.value,
                image: '',
                contact: '',
            },
        };

        // await fetch('/api/utils/resetUploads', {
        //     method: 'POST',
        // }).then( () => {

        //     // handleContact(metadata)
        //     // .then ( (data) => {
        //     //     metadata.data.contact = data.uri;
        //     //     // console.log(`here ${data.uri}`);
        //     // })

        // })


      
        

        console.log('upload to server')
        uploadToServer(event, id) // server => local filepath
            .then((pngPath) => {

                console.log(`upload to ipfs ${pngPath}`)
                IPFS(pngPath) // server -> ipfs => ipfs ccid
                    .then((pngccid) => {

                        metadata.data.image = `${BASE_URI}${pngccid.IpfsHash}`;

                        // console.log('gen metadata')
                        // genMetaFile(metadata)
                        //     .then((metaPath) => {
                        //         console.log('upload metadata to ipfs')

                        //         IPFS(metaPath)
                        //             .then((metaccid) => {
                        //                 // console.log(`${BASE_URI}${metaccid.IpfsHash}`);

                        //                 console.log('minting...')
                        //                 createCard('0x72fC6D5f8759f812b8Ae1155A9A8ED4780678EeC')
                        //                     .then((tx) => {
                        //                         console.log(tx);
                        //                     })


                        //             })
                        //     }
                        //     )


                    })
            })
    }

    const handleContact = async (metadata: any) => {
        const res = await fetch('/api/utils/handleContact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(metadata),
        })

        const data = await res.json();
        return data 
    }

    const createCard = async (addr: string) => {
        const res = await fetch('/api/mint/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ addr: addr }),
        })

        const data = await res.json();
        return data.tx;
    }

    const updateURI = async (uri: string) => {
        const res = await fetch('/api/mint/baseURI', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ uri: uri }),
        })

        const data = await res.json();
        return data;
    }


    const genMetaFile = async (metadata: any) => {
        const res = await fetch(`api/utils/writeMeta`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(metadata),
        })
        const data = await res.json();
        return data.path;
    }

    const IPFS = async (filepath: string) => {
        const name = filepath.substring(filepath.lastIndexOf('/') + 1);

        const axios = await fetch(`api/mint/ipfs`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({name: name, filepath: filepath}),
        })
        const data = await axios.json();
        console.log(data)
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
            <input id="addr" type="text" placeholder="Address" className={styles.card}></input><br></br>
            <input id="images" type="file" onChange={uploadToClient} className={styles.card} />
            <button className={styles.center}>Mint</button>
        </form>

    )
}

