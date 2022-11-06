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

  const saveFile = async (file: File, id:string ) => {
     // @ts-ignore 
    const data = fs.readFileSync(file.path);
    fs.writeFileSync(`./public/uploads/${id}.png`, data);
     // @ts-ignore 
    await fs.unlinkSync(file.path)
    
    return `./public/uploads/${id}.png`;
  };


export default async function handler(req: any, res: NextApiResponse) {

    const form = new IncomingForm();
    await form.parse(req, (err: any, fields: any, files: any) => {
        saveFile(files.file, fields.field).then( (path) => {
            return res.status(200).json({path: path});
        })
       });
    
   
};


