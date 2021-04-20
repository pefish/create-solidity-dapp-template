const { StringUtil } = require('@pefish/js-node-assist');
const HDWalletProvider = require('@truffle/hdwallet-provider');

require("ts-node/register");

module.exports = {
  migrations_directory: "./migrations",
  contracts_directory: "./contracts",
  contracts_build_directory: "./build/contracts",
  test_file_extension_regexp: /.*\.ts$/,
  networks: {
    develop: {  // config of "truffle develop"
      port: 8545,
      network_id: 20,
      accounts: 5,
      defaultEtherBalance: 500,
      blockTime: 3,
      networkCheckTimeout: 10000,
    },
    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: 21,
      networkCheckTimeout: 10000,
    },
    testnet: {
      provider: () => new HDWalletProvider(process.env.PKEY, process.env.URL || `https://ropsten.infura.io/v3/${process.env.INFURA_KEY}`),
      network_id: process.env.NETWOK_ID || 3,
      gasPrice: 1000000000,
      gas: 5500000,
      confirmations: 1,
      timeoutBlocks: 200,
      skipDryRun: true,
      websockets: false,
      // from: "",  // account to use when migrate, default: the first one
      networkCheckTimeout: 10000,
    },
    mainnet: {
      provider: () => new HDWalletProvider(process.env.PKEY, process.env.URL || `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`),
      network_id: process.env.NETWORK_ID || 1,
      gas: 5500000,
      gasPrice: StringUtil.start(process.env.GAS_PRICE || 1).shiftedBy(9).toNumber(),
      confirmations: 1,
      timeoutBlocks: 200,
      skipDryRun: true,
      networkCheckTimeout: 10000,
    },
  },

  sourceFetchers: ["sourcify", "etherscan"],

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
          enabled: true,
          runs: 200
        },
        evmVersion: "istanbul",
        outputSelection: {  // not currently supported
          "*": {
            "*": ["*"],
            "": [
              "ast" // Enable the AST output of every single file.
            ]
          },
        }
      }
    },
  },
};
