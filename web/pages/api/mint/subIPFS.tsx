import type { NextApiRequest, NextApiResponse } from 'next'
var axios = require('axios');
var FormData = require('form-data');
var fs = require('fs');

// uploads to ipfs
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const filename = `${req.body.filename}`;
    
    var data = new FormData();
    data.append('file', fs.createReadStream(filename));
    data.append('name', filename);
    // data.append('metadata', '{"keyvalues": { "example": "value" }}');
    data.append('wrapWithDirectory', 'false');
    data.append('pinToIPFS', 'false');

    var config = {
        method: 'post',
        url: 'https://hndshk.mypinata.cloud/api/v1/content',
        headers: {
            'x-api-key': process.env.IPFS_SUB_KEY,
            ...data.getHeaders()
        },
        data: data
    };

    const axios_res = await axios(config);
    return res.status(200).json(axios_res.data);
};
