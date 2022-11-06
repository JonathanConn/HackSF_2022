import type { NextApiRequest, NextApiResponse } from 'next'
 // @ts-ignore 
import { IncomingForm } from 'formidable-serverless';
// const formidable = require('formidable-serverless');
const fs = require('fs');

export const config = {
    api: {
        bodyParser: false,
    },
};

  const saveFile = async (file: File) => {
     // @ts-ignore 
    const data = fs.readFileSync(file.path);
    fs.writeFileSync(`./public/upload/${file.name}`, data);
     // @ts-ignore 
    await fs.unlinkSync(file.path);
    return;
  };


export default async function handler(req: any, res: NextApiResponse<NextApiResponse>) {

    const form = new IncomingForm();
    form.parse(req, (err: any, fields: any, files: any) => {
        console.log(files.file)
        saveFile(files.file);
        return res.status(201);
    })
};


