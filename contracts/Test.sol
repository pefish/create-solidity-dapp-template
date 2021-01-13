// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Test {

  event StoreWords(string words);

  string private words;

  function storeWords(string memory words_) public payable {
    words = words_;
    emit StoreWords(words);
  }

  function getWords() public view returns (string memory) {
    return words;
  }
}

