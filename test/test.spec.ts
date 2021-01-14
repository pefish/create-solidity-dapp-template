import { TestInstance } from "../types/truffle-contracts";

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
  });

});
