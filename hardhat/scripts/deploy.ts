const { ethers } = require("hardhat");

async function main() {
  /*
A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
so nftContract here is a factory for instances of our GameItem contract.
*/
  const calculatorContract = await ethers.getContractFactory("Calculator");

  // here we deploy the contract
  const deployedCalculatorContract = await calculatorContract.deploy();

  // wait for the contract to deploy
  await deployedCalculatorContract.deployed();

  // print the address of the deployed contract
  console.log("NFT Contract Address:", deployedCalculatorContract.address);

  console.log(".....Starting Verfication")
  let verified = false;
  let timeout = 10000;

  while (!verified) {
    try {
      await hre.run("verify:verify", {
        address: deployedCalculatorContract.address,
        constructorArguments: [],
      });
      verified = true;
    } catch (error) {
      console.log(`------FAILED TO VERIFY CONTRACT, PENDING RETRY, waiting for ${timeout} before trying again`)
      await sleep(timeout)
    }
  }



  // Verify the contract after deploying

}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });