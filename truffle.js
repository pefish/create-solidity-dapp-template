const HDWalletProvider = require('@truffle/hdwallet-provider');

require("ts-node/register");

module.exports = {
  migrations_directory: "./migrations",
  contracts_directory: "./contracts",
  contracts_build_directory: "./build/contracts",
  test_file_extension_regexp: /.*\.ts$/,
  networks: {
    develop: {  // truffle develop 启动的本地网络的配置
      port: 8545,
      network_id: 20,
      accounts: 5,
      defaultEtherBalance: 500,
      blockTime: 3
    },
    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: 21,
    },
    ropsten: {
      provider: () => new HDWalletProvider(process.env.PKEY, process.env.URL || `https://ropsten.infura.io/v3/${process.env.INFURA_KEY}`),
      network_id: process.env.NETWOK_ID || 3,
      gasPrice: 2000000000,
      gas: 5500000,
      confirmations: 1,
      timeoutBlocks: 200,
      skipDryRun: true,
      websockets: false,
      // from: "",  // migrate 时使用的账户，默认会使用第一个
    },
    mainnet: {
      provider: () => new HDWalletProvider(process.env.PKEY, process.env.URL || `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`),
      network_id: process.env.NETWOK_ID || 0,
      gasPrice: 1000000000,
      gas: 5500000,
      confirmations: 1,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },

  sourceFetchers: ["sourcify", "etherscan"],

  etherscan: {
    apiKey: "**" // 拉取源码需要的key
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    timeout: 100000,
    useColors: true
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.0",
      parser: "solcjs",
      settings: {
        optimizer: {
          enabled: false,
          runs: 200
        },
        evmVersion: "istanbul"
      }
    },
  },
};
