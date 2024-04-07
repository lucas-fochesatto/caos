import { ethers } from 'ethers'
import { abi, bytecode } from '../../artifacts/contracts/Bills.sol/Bills.json' 


export default async function DeployBills(provider, signer) {
    
    await provider.send('eth_requestAccounts', [])

    const factory = new ethers.ContractFactory(abi, bytecode, signer)
    const token = await factory.deploy("MyToken", "TKN", 1000);
    await token.waitForDeployment(); 
    console.log("Bills deployed to:", token.target);

}