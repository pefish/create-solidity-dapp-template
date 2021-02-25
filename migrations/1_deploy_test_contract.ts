const Proxy = artifacts.require("Proxy");
const Test = artifacts.require("Test");
import Web3 from "web3"

declare var web3: Web3;

module.exports = async function (deployer) {
  await deployer.deploy(Test);

  // 发布 Proxy 并设置实现者
  await deployer.deploy(Proxy, Test.address);

  const proxyAddress = Proxy.address
  let proxyContract = new web3.eth.Contract(Proxy.abi, proxyAddress)
  const owner = await proxyContract.methods["owner"]().call()

  // 更新实现者
  // await proxyContract.methods["upgradeTo"](Test.address).send({
  //   from: owner,
  // })

  // 初始化
  let proxyContract1 = new web3.eth.Contract(Test.abi, proxyAddress)
  await proxyContract1.methods["init"](123).send({
    from: owner,
  })
} as Truffle.Migration;

export {};