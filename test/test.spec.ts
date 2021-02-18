import { TestInstance } from "../types/truffle-contracts";
import Web3 from "web3"

declare var web3: Web3;

const Test = artifacts.require("Test");

contract('Test', (accounts) => {
  let testInstance: TestInstance

  beforeEach(async function () {
    testInstance = await Test.new();
  });


  it('storeWords getWords', async () => {
    const result = await testInstance.storeWords("Hello World!!!")
    // console.log(result)
    assert.equal(!!result.tx, true, "storeWords error");
    const result1 = await testInstance.getWords()
    // console.log(result)
    assert.equal(result1, "Hello World!!!", "getWords error");


    let testContract = new web3.eth.Contract(Test.abi, testInstance.address)
    await testContract.methods["storeWords"]("haha").send({
      from: accounts[0],
    })
    const result2 = await testContract.methods["getWords"]().call()
    assert.equal(result2, "haha", "getWords error");
  });

});
