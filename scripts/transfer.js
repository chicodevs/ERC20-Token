const hre = require("hardhat");
const { parseUnits } = require("ethers");

async function main() {

  const myToken = await hre.ethers.getContractFactory("MyFirstToken");

  const contractAddress = 'CONTRACT ADRESS HERE';

  const MyToken = await myToken.attach(contractAddress);

  await MyToken.transfer('WALLET PUBLIC KEYS HERE', parseUnits("NUMBER OF TOKENS IN STRING HERE", 18)); 
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
