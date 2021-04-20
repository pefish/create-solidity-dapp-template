const Proxy = artifacts.require("Proxy");
const Test = artifacts.require("Test");
import Web3 from "web3"

declare var web3: Web3;

module.exports = async function (deployer,network, accounts) {
  await deployer.deploy(Test);

  // deploy proxy
  await deployer.deploy(Proxy);

  const proxyAddress = Proxy.address
  // @ts-ignore
  let proxyContract: web3.eth.Contract = new web3.eth.Contract(Proxy.abi, proxyAddress)
  // set implement
  await proxyContract.methods["upgradeTo"](Test.address).send({
    from: accounts[0],
  })

  // init
  let proxyContract1 = new web3.eth.Contract(Test.abi, proxyAddress)
  await proxyContract1.methods["__Test_init"](123).send({
    from: accounts[0],
  })
} as Truffle.Migration;

export {};