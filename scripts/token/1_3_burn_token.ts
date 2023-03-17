import { ethers, upgrades } from "hardhat";
import {StringUtil} from "@pefish/js-node-assist";
import config from "../config/index";

async function main() {
  const Token = await ethers.getContractAt("Token", config["abcToken"]);
  const signers = await ethers.getSigners()
  const tx = await Token.burn(await signers[0].getAddress(), StringUtil.start(100).shiftedBy(18).toString())
  console.log(`succeed. hash: ${tx.hash}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
