import { TestInstance } from "../types/truffle-contracts";

const Test = artifacts.require("Test.sol");

contract('Test', (accounts) => {

  it('storeWords', async () => {
    const testInstance: TestInstance = await Test.deployed();
    
    const result = await testInstance.storeWords("Hello World!!!")
    // console.log(result)
    assert.equal(!!result.tx, true, "storeWords error");
  });

  it('getWords', async () => {
    const testInstance: TestInstance = await Test.deployed();
    
    const result = await testInstance.getWords()
    // console.log(result)
    assert.equal(result, "Hello World!!!", "getWords error");
  });

});
