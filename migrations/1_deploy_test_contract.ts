const Proxy = artifacts.require("Proxy");
const Test = artifacts.require("Test");
import Web3 from "web3"

declare var web3: Web3;

module.exports = async function (deployer) {
  await deployer.deploy(Test);

  // 发布 Proxy 并设置实现者
  await deployer.deploy(Proxy, Test.address);

  // 更新实现者
  // const proxyAddress = "0x1582a26Ac1D78493F621091D661dAB870CC9B93e"
  // let proxyContract = new web3.eth.Contract(Proxy.abi, proxyAddress)
  // const owner = await proxyContract.methods["owner"]().call()
  // await proxyContract.methods["upgradeTo"](Test.address).send({
  //   from: owner,
  // })
} as Truffle.Migration;

export {};