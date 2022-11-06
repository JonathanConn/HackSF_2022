import type { NextApiRequest, NextApiResponse } from 'next'
var axios = require('axios');
var FormData = require('form-data');
var fs = require('fs');

// uploads to ipfs
export default async function handler(req: NextApiRequest, res: NextApiResponse<ResData>) {

    const id = req.body.id;

    var data = new FormData();
    data.append('file', fs.createReadStream(`./${req.body.id}.json`));
    data.append('pinataOptions', '{"cidVersion": 1}');
    data.append('pinataMetadata', `{"name": "${req.body.id}.json"}`);

    var config = {
        method: 'post',
        url: 'https://api.pinata.cloud/pinning/pinFileToIPFS',
        headers: {
            'Authorization': `Bearer ${process.env.PINATA_JWT}`,
            ...data.getHeaders()
        },
        data: data
    };

    const axios_res = await axios(config);

    console.log(axios_res.data);

    return res.status(200).json(axios_res.data);
};
