import { ProxyInstance, TestInstance } from "../types/truffle-contracts";
import Web3 from "web3"

declare var web3: Web3;

const UpgradeabilityProxy = artifacts.require("Proxy");
const Test = artifacts.require("Test");

contract('Proxy', (accounts) => {
  let upgradeabilityProxyInstance: ProxyInstance
  let testInstance: TestInstance

  beforeEach(async function () {
    testInstance = await Test.new()
    upgradeabilityProxyInstance = await UpgradeabilityProxy.new();
    await upgradeabilityProxyInstance["upgradeTo"](testInstance.address)
  });


  it('storeWords getWords', async () => {
    // @ts-ignore
    let upgradeabilityProxyContract: web3.eth.Contract = new web3.eth.Contract(Test.abi, upgradeabilityProxyInstance.address)

    await upgradeabilityProxyContract.methods["storeWords"](1234).send({
      from: accounts[0],
    })
    const result1 = await upgradeabilityProxyContract.methods["getWords"]().call()
    // console.log(result1)
    assert.equal(result1.toString(), "1234", "getWords error");
  });

  it('getWords', async () => {
    let upgradeabilityProxyContract = new web3.eth.Contract(Test.abi, upgradeabilityProxyInstance.address)

    await upgradeabilityProxyContract.methods["init"](123).send({
      from: accounts[0],
    })

    const result1 = await upgradeabilityProxyContract.methods["getWords"]().call()
    assert.equal(result1.toString(), "123", "getWords error");
  });

  it('send eth', async () => {
    await upgradeabilityProxyInstance["send"](1)
    const balance = await web3.eth.getBalance(upgradeabilityProxyInstance.address)
    assert.equal(balance, "1", "balance error");
  });

});
