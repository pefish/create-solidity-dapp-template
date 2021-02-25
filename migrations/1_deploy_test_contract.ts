const Proxy = artifacts.require("Proxy");
const Test = artifacts.require("Test");

module.exports = async function (deployer) {
  await deployer.deploy(Test);
  await deployer.deploy(Proxy, Test.address);
} as Truffle.Migration;

export {};