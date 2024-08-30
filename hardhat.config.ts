import "@nomicfoundation/hardhat-toolbox";
import '@openzeppelin/hardhat-upgrades';
import { HardhatUserConfig } from "hardhat/config";

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
      url: "https://sepolia.base.org",
      accounts: [process.env.PKEY || "0000000000000000000000000000000000000000000000000000000000000000"],
      chainId: 84532,
      gasPrice: 1000000000
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
    timeout: 40000,
  },
  etherscan: {
    apiKey: {
      baseTestnet: process.env.API_KEY || "",
      base: process.env.API_KEY || "",
    },
    customChains: [
      {
        network: "base",
        chainId: 8453,
        urls: {
          apiURL: "https://api.basescan.org/api",
          browserURL: "https://basescan.org"
        }
      },
      {
        network: "baseTestnet",
        chainId: 84532,
        urls: {
          apiURL: "https://api-sepolia.basescan.org/api",
          browserURL: "https://sepolia.basescan.org"
        }
      }
    ]
  }
};

export default config;
