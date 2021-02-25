// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Test {
    event StoreWords(uint256 words);

    uint256 private words;

    function init(uint256 _words) external {
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
