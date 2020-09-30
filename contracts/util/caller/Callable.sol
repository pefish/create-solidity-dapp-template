// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

import "../owner/Ownable.sol";

interface ICallable {
    event CallerTransferred(address indexed previousCaller, address indexed newCaller);

    function caller() external view returns (address payable);
    function isCaller() external view returns (bool);
    function renounceCaller() external;
    function transferCaller(address payable newCaller) external;
}

abstract contract Callable is Ownable {
    address payable private _caller;

    event CallerTransferred(address indexed previousCaller, address indexed newCaller);


    constructor () {
        _caller = msg.sender;
        emit CallerTransferred(address(0), _caller);
    }

    function caller() public view returns (address payable) {
        return _caller;
    }

    modifier onlyCaller() {
        require(isCaller(), "only caller");
        _;
    }

    function isCaller() public view returns (bool) {
        return msg.sender == _caller;
    }

    function renounceCaller() public onlyOwner {
        emit CallerTransferred(_caller, address(0));
        _caller = address(0);
    }

    function transferCaller(address payable newCaller) public onlyOwner {
        _transferCaller(newCaller);
    }

    function _transferCaller(address payable newCaller) internal {
        require(newCaller != address(0), "can not be 0 address");
        emit CallerTransferred(_caller, newCaller);
        _caller = newCaller;
    }
}
