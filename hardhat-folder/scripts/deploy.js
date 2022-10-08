const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

async function main() {
  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
  const metadataURL = METADATA_URL;
  const chroniclesContract = await ethers.getContractFactory("Chronicles");
  const deployedChroniclesContract = await chroniclesContract.deploy(
    metadataURL,
    whitelistContract
  );

  console.log(
    "Chronicles Contract Address:",
    deployedChroniclesContract.address
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });