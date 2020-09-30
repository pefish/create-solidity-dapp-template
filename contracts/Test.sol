// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;
pragma experimental ABIEncoderV2;

import "./util/caller/Callable.sol";
import "./util/math/SafeMath.sol";

contract Test is Callable {
  using SafeMath for uint256;

  event StoreWords(string words);

  string private words;

  function storeWords(string memory words_) onlyCaller public payable {
    words = words_;
    emit StoreWords(words);
  }

  function getWords() public view returns (string memory) {
    return words;
  }
}

