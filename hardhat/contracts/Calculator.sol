//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Calculator {
    // Code goes here
    int256 public prevComputationValue;

    function add(int256 a, int256 b) public pure returns (int256) {
        return a + b;
    }

    function minus(int256 a, int256 b) public pure returns (int256) {
        return a - b;
    }
}
