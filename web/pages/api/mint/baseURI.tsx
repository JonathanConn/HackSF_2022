import { ethers } from 'ethers';
import FactoryABI from "../../../../hardhat/artifacts/contracts/CardFactory.sol/CardFactory.json";

import type { NextApiRequest, NextApiResponse } from 'next'
import { stringify } from 'querystring';

const alchemyProvider = new ethers.providers.AlchemyProvider("maticmum", process.env.API_KEY);
const signer = new ethers.Wallet(process.env.PRIVATE_KEY!, alchemyProvider);
const factoryContract = new ethers.Contract(process.env.CONTRACT_ADDRESS!, FactoryABI.abi, signer);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // console.log('here');
    if (req.method == 'POST') {
        await factoryContract._setURI(req.body.uri)
        .then( (tx: any) => { 
            console.log(tx) 
            return res.status(200).json({tx: tx});
        })
        .catch( (err: any) => { console.log(err) } );
    }
    else if (req.method == 'GET') {
        await factoryContract.baseURI()
        .then( (tx: any) => { 
            console.log(tx) 
            return res.status(200).json({tx: tx});
        } )
        .catch( (err: any) => { console.log(err) } );
    }
   
}
