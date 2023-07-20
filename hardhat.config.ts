import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import '@openzeppelin/hardhat-upgrades';
import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";
import "@matterlabs/hardhat-zksync-verify";

const config: HardhatUserConfig = {
  defaultNetwork: "ethTestnet",
  networks: {
    hardhat: {
      zksync: false,
    },
    eth: {
      url: "https://rpc.ankr.com/eth",
      accounts: [process.env.PKEY || "0000000000000000000000000000000000000000000000000000000000000000"],
      chainId: 1,
      zksync: false,
    },
    ethTestnet: {
      url: "https://rpc.ankr.com/eth_goerli",
      accounts: [process.env.PKEY || "0000000000000000000000000000000000000000000000000000000000000000"],
      chainId: 5,
      zksync: false,
    },
    zk: {
      url: "https://mainnet.era.zksync.io",
      ethNetwork: "",
      chainId: 324,
      zksync: true,
      verifyURL: 'https://zksync2-mainnet-explorer.zksync.io/contract_verification',
      timeout: 10000
    },
    zkTestnet: {
      url: "https://zksync2-testnet.zksync.dev", // https://goerli-api.zksync.io/jsrpc
      ethNetwork: "",
      chainId: 280,
      zksync: true,
      timeout: 10000
    },
    arb: {
      url: "https://arb1.arbitrum.io/rpc",
      accounts: [process.env.PKEY || "0000000000000000000000000000000000000000000000000000000000000000"],
      chainId: 42161,
      zksync: false,
    },
    arbTestnet: {
      url: "https://goerli-rollup.arbitrum.io/rpc",
      accounts: [process.env.PKEY || "0000000000000000000000000000000000000000000000000000000000000000"],
      chainId: 421613,
      zksync: false,
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
