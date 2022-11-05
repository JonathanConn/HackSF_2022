import type { NextApiRequest, NextApiResponse } from 'next'

// builds metadata 
export default async function handler(req: NextApiRequest, res: NextApiResponse<ResData>) {

    const metadata = JSON.stringify({
        'name': req.body.name,
        'number': req.body.number,
    });

    
    try {
        const ipfs_res = await fetch(`http://localhost:3000/api/ipfs`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: metadata,
        });
    } catch (e) {
        return res.status(500).send(` failed \n ${e} `)
    }   

    return res.status(200).json(req.body)
};
