import { ethers } from 'ethers'
import { abi, bytecode } from '../../artifacts/contracts/Events.sol/Events.json' 


export default async function DeployEvents(provider, signer) {
    
    await provider.send('eth_requestAccounts', [])

    const factory = new ethers.ContractFactory(abi, bytecode, signer)
    const token = await factory.deploy("MyToken", "TKN", 1000);
    await token.waitForDeployment(); 
    console.log("Events deployed to:", token.target);

}