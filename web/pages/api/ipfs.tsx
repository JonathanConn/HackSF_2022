import type { NextApiRequest, NextApiResponse } from 'next'
var axios = require('axios');

// uploads to ipfs
export default async function handler(req: NextApiRequest, res: NextApiResponse<ResData>) {

    let metadata = {}
    metadata["hashToPin"] = "QmYJSuQVK52hXfJyTay73gY2MgeEA232srKN4S4HfdSS4i"
    metadata["pinataMetadata"] = req.body.data

    const data = JSON.stringify(metadata);

    var config = {
        method: 'post',
        url: 'https://api.pinata.cloud/pinning/pinByHash',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.PINATA_JWT}`
        },
        data: data
    };

    const axios_res = await axios(config);

    console.log(axios_res.data);

    return res.status(200).json(axios_res.data);
};
