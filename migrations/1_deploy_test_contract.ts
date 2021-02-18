const Test = artifacts.require("Test");

module.exports = async function (deployer) {
  await deployer.deploy(Test);
} as Truffle.Migration;

export {};
