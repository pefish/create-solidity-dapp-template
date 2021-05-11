
## Title

Description.

## Install Dependencies

```shell
yarn
```

## Compile Contracts

```shell
yarn build
```

## Run Tests

```shell
yarn test
```

## Deploy testnet

* URL=** PKEY=** yarn deploy-testnet

## Deploy mainnet

* URL=** PKEY=** NETWORK_ID=0 GAS_PRICE=2 yarn deploy

## Verify source

1. yarn flatten contracts/Index.sol > flatten/Index_full.sol // will generate single solidity file
2. the single solidity file can be verified by etherscan.

## Note

`patch-package` is used to patch for npm package.

1. vim node_modules/some-package/brokenFile.js
2. patch-package some-package  // will generate patch file
3. patch file need to be invoked by git version manager.
