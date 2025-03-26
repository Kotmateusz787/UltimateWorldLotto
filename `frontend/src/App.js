import React from 'react';
     import { WorldID } from '@worldcoin/id';
     import { ethers } from 'ethers';

     function App() {
       const worldID = new WorldID({ app_id: "app_123abc", action: "play-lottery" });

       const handleDeposit = async () => {
         const provider = new ethers.providers.Web3Provider(window.ethereum);
         await provider.send("eth_requestAccounts", []);
         const signer = provider.getSigner();
         const contract = new ethers.Contract(
           "0xTWÓJ_KONTRAKT",
           ["function deposit() payable"],
           signer
         );
         await contract.deposit({ value: ethers.utils.parseEther("1") });
         alert("Depozyt udany!");
       };

       return (
         <div>
           <h1>Ultimate World Lotto</h1>
           <button onClick={handleDeposit}>Depozyt 1 WLD</button>
         </div>
       );
     }

     export default App;
