
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { ERC20Upgradeable } from "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import { OwnableUpgradeable } from "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract Token is ERC20Upgradeable, OwnableUpgradeable {
  function initialize (
    string memory _name,
    string memory _symbol
  ) external initializer {
    OwnableUpgradeable.__Ownable_init();
    ERC20Upgradeable.__ERC20_init(_name, _symbol);
  }

  function mint (address _account, uint256 _amount) external onlyOwner {
    _mint(_account, _amount);
  }

  function burn (address _account, uint256 _amount) external onlyOwner {
    _burn(_account, _amount);
  }

}
