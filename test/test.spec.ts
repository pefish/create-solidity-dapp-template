import { TestInstance } from "../types/truffle-contracts";

const Test = artifacts.require("Test");

contract('Test', (accounts) => {
  let testInstance: TestInstance

  before(async function () {
    testInstance = await Test.new();
  });


  it('storeWords', async () => {
    const result = await testInstance.storeWords("Hello World!!!")
    // console.log(result)
    assert.equal(!!result.tx, true, "storeWords error");
  });

  it('getWords', async () => {
    const result = await testInstance.getWords()
    // console.log(result)
    assert.equal(result, "Hello World!!!", "getWords error");
  });

});
