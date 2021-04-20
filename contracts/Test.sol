// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { Initializable } from "@pefish/solidity-lib/contracts/contract/Initializable.sol";
import { Ownable } from "@pefish/solidity-lib/contracts/contract/Ownable.sol";

contract Test is Initializable, Ownable {
    event StoreWords(uint256 words);

    uint256 private words;

    function __Test_init(uint256 _words) external initializer {
        Ownable.__Ownable_init();

        words = _words;
    }

    function storeWords(uint256 words_) public payable {
        words = words_;
        emit StoreWords(words);
    }

    function getWords() public view returns (uint256) {
        return words;
    }

    receive() external payable {}
}
