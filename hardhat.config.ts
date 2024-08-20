import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import '@openzeppelin/hardhat-upgrades';

const config: HardhatUserConfig = {
  defaultNetwork: "ethTestnet",
  networks: {
    eth: {
      url: "https://rpc.ankr.com/eth",
      accounts: [process.env.PKEY || "0000000000000000000000000000000000000000000000000000000000000000"],
      chainId: 1,
    },
    ethTestnet: {
      url: "https://rpc.ankr.com/eth_sepolia",
      accounts: [process.env.PKEY || "0000000000000000000000000000000000000000000000000000000000000000"],
      chainId: 11155111,
    },
    arb: {
      url: "https://arb1.arbitrum.io/rpc",
      accounts: [process.env.PKEY || "0000000000000000000000000000000000000000000000000000000000000000"],
      chainId: 42161,
    },
    arbTestnet: {
      url: "https://goerli-rollup.arbitrum.io/rpc",
      accounts: [process.env.PKEY || "0000000000000000000000000000000000000000000000000000000000000000"],
      chainId: 421613,
    },
    base: {
      url: "https://mainnet.base.org",
      accounts: [process.env.PKEY || "0000000000000000000000000000000000000000000000000000000000000000"],
      chainId: 8453,
    },
    baseTestnet: {
      url: "https://goerli.base.org",
      accounts: [process.env.PKEY || "0000000000000000000000000000000000000000000000000000000000000000"],
      chainId: 84531,
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
  mocha: {
    timeout: 40000
  }
};

export default config;
