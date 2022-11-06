import type { NextApiRequest, NextApiResponse } from 'next'
var fs = require('fs');

// combines files into one img to upload 
export default async function handler(req: NextApiRequest, res: NextApiResponse<ResData>) { // returns filename

    try {
        fs.writeFileSync(req.body.filename, req.body.data);
        return res.status(200).send('success');
    }
    catch (e) {
        return res.status(500);
    }
}
