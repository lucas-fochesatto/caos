import { ethers } from 'ethers'
import { abi, bytecode } from '../../artifacts/contracts/Rent.sol/Rent.json' 


export default async function DeployRent(provider, signer) {
    
    await provider.send('eth_requestAccounts', [])

    const factory = new ethers.ContractFactory(abi, bytecode, signer)
    const token = await factory.deploy("MyToken", "TKN", 1000);
    await token.waitForDeployment(); 
    console.log("Rent deployed to:", token.target);

}