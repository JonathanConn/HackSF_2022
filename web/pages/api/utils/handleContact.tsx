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


export default async function handler(req: any, res: NextApiResponse) {

    const addr = req.body.data.addr;
    const id = req.body.data.id;

    console.log('here');

    await factoryContract.personToCard(addr)
        .then((tx: any) => {
            if (tx != 0) {
                factoryContract.contractURI(tx)
                    .then((uri: string) => {
                        return res.status(200).json({ tx: false, uri: uri });
                    })
            }

            else {
                // var data = new FormData();
                // data.append('files', fs.createReadStream(`./public/uploads/contact.json`));
                // data.append('name', 'contact.json');
                // data.append('wrapWithDirectory', 'false');
                // data.append('pinToIPFS', 'false');

                // var config = {
                //     method: 'post',
                //     url: 'https://hndshk.mypinata.cloud/api/v1/content',
                //     headers: {
                //         'x-api-key': process.env.IPFS_SUB_KEY,
                //         ...data.getHeaders()
                //     },
                //     data: data
                // };

                // axios(config).then( (data:any) => {
                //     return res.status(200).json({ tx: true, uri: `https://hndshk.mypinata.cloud/api/v1/content${data.data.IpfsHash}` });
                // })
            }
            
        })
        .catch((err: any) => {
            console.log(err)
            return res.status(200).json({ tx: false })
        });

}
