import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path';
const fs = require('fs');


export default async function handler(req: any, res: NextApiResponse) {

    const directory = "./public/uploads";

    try{
        fs.rmSync(directory, { recursive: true })
    } catch (e) {};
    fs.mkdirSync(directory);
    fs.mkdirSync(`${directory}/meta`);
    fs.mkdirSync(`${directory}/img`);


    fs.writeFileSync(`${directory}/contact.json`, JSON.stringify({}))

    for (var i = 0; i < 3; i++) {
        fs.writeFileSync(`${directory}/meta/${i}.json`, JSON.stringify({test: 'testdata'}))
        fs.writeFileSync(`${directory}/img/${i}.png`, '')
    }

    return res.status(200).send('done');
   
   
};


