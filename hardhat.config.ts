import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import '@openzeppelin/hardhat-upgrades';

const config: HardhatUserConfig = {
  defaultNetwork: "arbitrum",
  networks: {
    hardhat: {
    },
    goerli: {
      url: "https://eth-goerli.alchemyapi.io/v2/123abc123abc123abc123abc123abcde",
      accounts: [process.env.PKEY || "0000000000000000000000000000000000000000000000000000000000000000"]
    },
    arbitrum: {
      url: "https://arb1.arbitrum.io/rpc",
      accounts: [process.env.PKEY || "0000000000000000000000000000000000000000000000000000000000000000"],
      chainId: 42161,
    }
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
};

export default config;
