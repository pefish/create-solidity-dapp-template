
import { UpgradeabilityProxy } from "@pefish/solidity-lib/contracts/contract/UpgradeabilityProxy.sol";

contract Proxy is UpgradeabilityProxy {
    constructor (address _implementation) UpgradeabilityProxy(_implementation) {

    }
}
