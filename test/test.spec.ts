import { TestInstance, ProxyInstance } from "../types/truffle-contracts";
import Web3 from "web3"

declare var web3: Web3;

const Proxy = artifacts.require("Proxy");
const Test = artifacts.require("Test");

contract('Test', (accounts) => {
  let proxyInstance: ProxyInstance

  beforeEach(async function () {
    const testInstance = await Test.new();
    proxyInstance = await Proxy.new(testInstance.address)
  });


  it('storeWords getWords', async () => {
    let testContract = new web3.eth.Contract(Test.abi, proxyInstance.address)
    await testContract.methods["storeWords"](123).send({
      from: accounts[0],
    })
    const result2 = await testContract.methods["getWords"]().call()
    assert.equal(result2, 123, "getWords error");
  });

});
