
[Create App](https://github.com/pefish/create-app) 使用的dapp模板

* 使用Truffle框架
* Typescript支持
* SafeMath等常用库

## 依赖

* yarn global add truffle

## 本地测试

* yarn
* yarn build (合约每次变动都需要执行)
* 开始测试
   * truffle develop 或者 ganache + truffle console
   * migrate
   * test

## 发布测试网

* INFURA_KEY=** PRIVATE_KEY=** truffle migrate --network=ropsten  // 部署测试环境

## 发布上线主网

* INFURA_KEY=** PRIVATE_KEY=** truffle migrate --network=mainnet
