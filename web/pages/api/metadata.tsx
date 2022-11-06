import type { NextApiRequest, NextApiResponse } from 'next'

const fs = require('fs');
var crypto = require("crypto");

// builds metadata 
export default async function handler(req: NextApiRequest, res: NextApiResponse<ResData>) {

    const id = crypto.randomBytes(20).toString('hex');
    const metadata = {
        'id': id,
        'name': req.body.name,
        'number': req.body.number,
    };

    try {
        fs.writeFileSync(`./${id}.json`, JSON.stringify(metadata))
    //    .then( () => {
    //         return res.status(200).json(metadata)
    //     })
    } catch (e) {
        return res.status(500).send(`failed ${e} \n`)
    }
    
    // try {
    //     const ipfs_res = await fetch(`http://localhost:3000/api/ipfs`, {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify(metadata),
    //     })
    // } catch (e) {
    //     return res.status(500).send(` failed \n ${e} `)
    // }   

    return res.status(200).json(metadata)
};
