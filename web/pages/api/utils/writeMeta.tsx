import type { NextApiRequest, NextApiResponse } from 'next'
var fs = require('fs');

// combines files into one img to upload 
export default async function handler(req: NextApiRequest, res: NextApiResponse) { // returns filename
    try {
        fs.writeFileSync(`./public/uploads/${req.body.id}.json`, JSON.stringify(req.body.data))
        return res.status(200)
    }
    catch (e) {
        console.log(e)
        return res.status(500);
    }
}
