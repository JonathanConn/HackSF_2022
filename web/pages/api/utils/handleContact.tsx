import { ethers } from 'ethers';
import FactoryABI from "../../../../hardhat/artifacts/contracts/CardFactory.sol/CardFactory.json";

import type { NextApiRequest, NextApiResponse } from 'next'

import path from 'path';
const fs = require('fs');

const alchemyProvider = new ethers.providers.AlchemyProvider("maticmum", process.env.API_KEY);
const signer = new ethers.Wallet(process.env.PRIVATE_KEY!, alchemyProvider);
const factoryContract = new ethers.Contract(process.env.CONTRACT_ADDRESS!, FactoryABI.abi, signer);

var axios = require('axios');
var FormData = require('form-data');


// uploads to ipfs
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    

    const axios_res = await axios(config);
    return res.status(200).json(axios_res.data);
};


export default async function handler(req: any, res: NextApiResponse) {

    const addr = req.body.data.addr;
    const id = req.body.data.id;

    await factoryContract.personToCard(addr)
    .then( (tx: any) => { 
        if (tx != 0) { 

            factoryContract.contractURI(tx)
            .then( (uri: string) => {
                return res.status(200).json({tx: false, contactpath: uri});
            })

             
        }
        
        fs.writeFileSync(`/public/uploads/${req.body.id}.contact.json`, {});
        return res.status(200).json({tx: true, contactpath: `/public/uploads/${req.body.id}.contact.json`});
    })
    .catch( (err: any) => { console.log(err) 
        return res.status(200).json({tx: false})} );
    
}
