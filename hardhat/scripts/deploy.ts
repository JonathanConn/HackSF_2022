import { ethers } from "hardhat";

require('dotenv').config();
const { API_URL, PRIVATE_KEY } = process.env;

async function main() {

  const me = new ethers.Wallet(PRIVATE_KEY!, ethers.provider);
  const cardFactory = await ethers.getContractFactory("CardFactory", {
    signer: me,
  });
  const deployedFact = await cardFactory.deploy();
  await deployedFact.deployed();

  console.log(`Deployed to ${deployedFact.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
