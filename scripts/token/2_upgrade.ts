import { ethers, upgrades } from "hardhat";
import config from "./config";

async function main() {
  const Token = await ethers.getContractFactory("Token");

  const instance = await upgrades.upgradeProxy(config["Token"], Token);
  await instance.deployed();
  console.log(`upgrade done.`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
