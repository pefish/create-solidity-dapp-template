import { ethers, upgrades } from "hardhat";
import {StringUtil} from "@pefish/js-node-assist";

async function main() {

  const Token = await ethers.getContractFactory("Token");

  const instance = await upgrades.deployProxy(Token, [
    "Test Token",
    "ABC"
  ]);
  await instance.deployed();
  console.log(`deployed to ${instance.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
