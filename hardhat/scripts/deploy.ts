import { ethers } from "hardhat";

async function main() {

  const Card = await ethers.getContractFactory("Card");
  const card = await Card.deploy('{"name":"bob"}');

  await card.deployed();

  console.log(`Deployed to ${card.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
