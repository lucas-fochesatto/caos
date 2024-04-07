import '../wallet-button.css'
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

import checked from '../assets/checked.svg'
import checkedb from '../assets/checked-blue.svg'
import { ManagerSignupInfo } from "../types/managerSignupInfo";
import { GetAccountResult } from "../types/account";
import { SDKState, useAccount } from '@metamask/sdk-react-ui';
import { ethers } from 'ethers';
import { abi, bytecode } from '../../artifacts/contracts/ERC20Token.sol/ERC20Token.json' 
import DeployERC20 from '../deploy/DeployERC20';
import DeployRent from '../deploy/DeployRent';
import DeployEvents from '../deploy/DeployEvents';
import DeployBills from '../deploy/DeployBills';


export default function ManagerOwnersInfo({ info , account }: { info: ManagerSignupInfo |null ; account:SDKState }) {
    const navigate = useNavigate()

    const wallet = useAccount()
      

    
    const [current, setCurrent] = useState(0)
    const [input, setInput] = useState({
        publicKey: ""
    })
    
    // Check if user is logged in:
    /* useEffect(() => {
        if(!account.connected) {
            navigate('/manager')
        }
    }, [account.connected]) */

    const handleNext = () => {
        info.residents[current] = input.publicKey
        setCurrent(a => a+1)
        setInput({publicKey: info.residents[current+1] || ""})
    }

    const handlePrevious = () => {
        info.residents[current] = input.publicKey
        setInput({publicKey: info.residents[current-1]})
        setCurrent(a => a-1)
    }

    const handleSubmit = async () => {
        if(info) {
            /* info.residents[current] = input.publicKey
            const newManager = {
                wallet: wallet.address.toString()
            }

            const ManagerOptions = { method:'POST', mode:'cors', headers:{ 'Content-Type': 'application/json' }, body: JSON.stringify(newManager)}

            console.log("Trying to fetch...")
            const managerResponse = await fetch('https://caosdatabase.onrender.com/addManager', ManagerOptions)
            //const response = await fetch('https://caosdatabase.onrender.com/Managers')
            const addedManager = await managerResponse.json()
            
            const newProperty = {
                "name": info.buldingName,
                numberUnits: info.numberUnits,
                managerID: addedManager.managerID
            }

            const PropertyOptions = { method:'POST', mode:'cors', headers:{ 'Content-Type': 'application/json' }, body: JSON.stringify(newProperty)}
            const propertyResponse = await fetch('https://caosdatabase.onrender.com/addProperty', PropertyOptions)
            const addedProperty = await propertyResponse.json()

            for(const resident of info.residents) {
                const newResident = {
                    wallet: resident,
                    propertyID: addedProperty.propertyID
                }
                const ResidentOptions = { method:'POST', mode:'cors', headers:{ 'Content-Type': 'application/json' }, body: JSON.stringify(newResident)}
                const residentResponse = await fetch('https://caosdatabase.onrender.com/addResident', ResidentOptions)
                const addedResident = await residentResponse.json()
                console.log(addedResident)
            }
            console.log(info.residents) */
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            await provider.send('eth_requestAccounts', [])
            const signer = provider.getSigner()
            
            DeployERC20(provider, signer);
            DeployRent(provider, signer);
            DeployEvents(provider, signer);
            DeployBills(provider, signer);
            // const factory = new ethers.ContractFactory(abi, bytecode, signer)
            // const token = await factory.deploy("MyToken", "TKN", 1000);
            // await token.waitForDeployment(); 
            // console.log("Token deployed to:", token.target);

            // const Rent = new ethers.ContractFactory(abi, bytecode, signer)
            // const rent = await Rent.deploy(token.target); 
            // await rent.waitForDeployment();
            // console.log("Rent contract deployed to:", rent.target);

            // const Events = new ethers.ContractFactory(abi, bytecode, signer)
            // const events = await Events.deploy(token.target, rent.target); 
            // await events.waitForDeployment();
            // console.log("Events contract deployed to:", events.target);

            // const Bills = new ethers.ContractFactory(abi, bytecode, signer)
            // console.log("Deploying Bills contract...");
            // const bills = await Bills.deploy();
            // await bills.waitForDeployment();
            // console.log("Bills contract deployed to:", bills.target);

            // const Maintenance = new ethers.ContractFactory(abi, bytecode, signer)
            // console.log("Deploying Maintenance contract...");
            // const maintenance = await Maintenance.deploy();
            // await maintenance.waitForDeployment();
            // console.log("Maintenance contract address:", maintenance.target);
        }
    }  
    return (
        <>
            <div className="p-16 items-center flex justify-center flex-col">
                <div className="mb-10 text-center text-white">
                    <h1 className="text-3xl">Welcome, dear manager!</h1>
                    <p className="text-2xl text-[#6D9EEB]">Please enter owners info or click "Submit" to do it later</p>
                    <h1 className="mt-5 text-3xl">Resident of unit #{current+1}</h1>
                </div>
                <div className="w-[50vw]">
                    <div className="flex gap-5 items-center">
                        <label className="w-[16vw] text-white text-xl" htmlFor="bname">Resident's Public Key: </label>
                        <input value={input.publicKey} onChange={e => {setInput({publicKey: e.target.value})}} className=" text-lg px-2 text-white outline-0 w-[80%] bg-transparent border-b border-[#1155CC]" type="text" name="bname" id="bname"/>
                    </div>
                    <div className="flex gap-10 mt-10">
                        {current != 0 ? 
                        <button onClick={handlePrevious} className='w-[7vw] py-2 rounded text-[#6D9EEB] border-[#1155CC] border bg-transparent font-bold hover:bg-[#6D9EEB] hover:text-white ease-in-out duration-300'>Previous</button>
                        : ""
                        }

                        {current < info.numberUnits - 1 ?
                        <button onClick={handleNext} className='w-[7vw] py-2 rounded text-white bg-[#6D9EEB] font-bold hover:bg-transparent hover:text-[#6D9EEB] hover:border-[#1155CC] hover:border ease-in-out duration-300 '>Next</button>
                        : ""
                        }
                    </div>
                    <button onClick={handleSubmit} className='mt-10 w-[7vw] py-2 rounded text-white bg-[#6D9EEB] font-bold hover:bg-transparent hover:text-[#6D9EEB] hover:border-[#1155CC] hover:border ease-in-out duration-300 '>Submit</button>
                </div>
                <div className= "absolute right-12 border border-[#1155CC] p-5 rounded" >
                    <div className="flex items-center gap-3">
                        <img src={checkedb} alt="" />
                        <p className="text-white">Connect Wallet</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <img src={checkedb} alt="" />
                        <p className="text-white">Building Info</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <img src={checked} alt="" />
                        <p className="text-[#717171]">Owners Info</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}