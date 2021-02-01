
[Create App](https://github.com/pefish/create-app) 使用的dapp模板

* 使用Truffle框架
* Typescript支持
* SafeMath等常用库

## 本地测试

* yarn
* yarn build (合约每次变动都需要执行)
* yarn test

## 发布测试网

* URL=** PKEY=** truffle migrate --network=ropsten  // 部署测试环境

## 发布上线主网

* URL=** PKEY=** NETWOK_ID=0 truffle migrate --network=mainnet

## 验证源码

* yarn flatten 生成单一的 sol 文件
* 单一文件放到 etherscan 去验证即可

## 说明

`patch-package` 是用于 npm 包打补丁

1. vim node_modules/some-package/brokenFile.js
2. patch-package some-package  // 会生成 patch 文件
3. patch 放入版本管理，提交 git 仓库
4. scripts 中加入 `"postinstall": "patch-package"`，使得 `yarn install` 后自动安装补丁
