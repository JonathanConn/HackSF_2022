import { ethers } from 'ethers';
import FactoryABI from "../../../../hardhat/artifacts/contracts/CardFactory.sol/CardFactory.json";

import type { NextApiRequest, NextApiResponse } from 'next'
import { stringify } from 'querystring';

const alchemyProvider = new ethers.providers.AlchemyProvider("maticmum", process.env.API_KEY);
const signer = new ethers.Wallet(process.env.PRIVATE_KEY!, alchemyProvider);
const factoryContract = new ethers.Contract(process.env.CONTRACT_ADDRESS!, FactoryABI.abi, signer);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    await factoryContract.createCard(req.body.addr)
    .then( (tx: any) => { 
        console.log(tx) 
        return res.status(200).json({tx: tx});
    })
    .catch( (err: any) => { console.log(err) } );
    
}
