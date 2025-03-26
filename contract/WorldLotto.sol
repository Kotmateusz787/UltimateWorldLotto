// SPDX-License-Identifier: MIT
     pragma solidity ^0.8.0;

     contract WorldLotto {
         address public owner = 0x663ca19033495149e3cad92274cce90e71db1951;
         uint256 public pool;
         uint256 public lastDraw;
         uint256 public constant FEE = 10;

         function deposit() external payable {
             require(msg.value == 1 ether, "Wpłać dokładnie 1 WLD");
             uint256 fee = (msg.value * FEE) / 100;
             pool += msg.value - fee;
             payable(owner).transfer(fee);
         }

         function drawWinner() external {
             require(block.timestamp >= lastDraw + 1 days, "Losowanie raz dziennie");
             payable(msg.sender).transfer(pool);
             pool = 0;
             lastDraw = block.timestamp;
         }
     }
