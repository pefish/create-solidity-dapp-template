
[Create App](https://github.com/pefish/create-app) 使用的dapp模板

* 使用Truffle框架
* Typescript支持
* SafeMath等常用库

## 使用步骤

* yarn
* yarn build (合约每次变动都需要执行)
* 开始测试
   * truffle develop / ganache + truffle console
   * migrate
   * test
* echo <privateKey> > .secret  // 配置部署私钥
* truffle migrate --network=ropsten  // 部署测试环境
