const hre = require("hardhat");
const { parseUnits } = require("ethers");

async function main() {

  const myToken = await hre.ethers.getContractFactory("MyFirstToken");

  const contractAddress = 'CONTRACT ADRESS';

  const MyToken = await myToken.attach(contractAddress);

  await MyToken.transfer('WALLET ADRESS', parseUnits("1", 18)); //SENDING 1 TOKEN TO THIS WALLET ADRESS
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
