import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path';
const fs = require('fs');


export default async function handler(req: any, res: NextApiResponse) {

    const directory = "./public/uploads";

    try{
        fs.rmSync(directory, { recursive: true })
    } catch (e) {};
    fs.mkdirSync(directory);
    return res.status(200)
   
   
};


