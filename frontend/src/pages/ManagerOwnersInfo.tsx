import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import '../wallet-button.css'
import { useEffect } from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { WalletContextState } from "@solana/wallet-adapter-react";

import checked from '../assets/checked.svg'
import checkedb from '../assets/checked-blue.svg'
import { ManagerSignupInfo } from "../types/managerSignupInfo";

export default function ManagerOwnersInfo({ info ,connection, wallet }: { info: ManagerSignupInfo | null ;connection: any; wallet:WalletContextState }) {
    const navigate = useNavigate()
    
    // Check if user is logged in:
    useEffect(() => {
        if(!wallet.publicKey) {
            navigate('/manager')
        }
    }, [wallet.publicKey])

    const handleSubmit = (event) => {
        if(info) {
            event.preventDefault()
            info.ownersPublicKey = event.target[0].value
            info.ownersUnit = event.target[1].value.toString()
            
            console.log(info)
        }
    }
    
    return (
        <>
            <div className="p-16 items-center flex justify-center flex-col">
                <div className="mb-10 text-center text-white">
                    <h1 className="text-3xl">Welcome, dear manager!</h1>
                    <p className="text-2xl text-[#6D9EEB]">Please enter owners info or do it later</p>
                </div>
                <form className="w-[50vw]" onSubmit={handleSubmit}>
                    <div className="flex gap-5 items-center">
                        <label className="w-[15vw] text-white text-xl" htmlFor="bname">Owner's Public Key: </label>
                        <input className="text-lg px-2 text-white outline-0 w-[80%] bg-transparent border-b border-[#1155CC]" type="text" name="bname" id="bname" required/>
                    </div>
                    <div className="flex gap-5 items-center mt-10">
                        <label className="w-[15vw] text-white text-xl" htmlFor="bnumber">Owner's unit: </label>
                        <input className="text-lg px-2 text-white outline-0 w-[80%] bg-transparent border-b border-[#1155CC]" type="number" name="bnumber" id="bnumber" required/>
                    </div>
                    <button type="submit" className='mt-10 w-[7vw] py-2 rounded text-white bg-[#6D9EEB] font-bold hover:bg-transparent hover:text-[#6D9EEB] hover:border-[#1155CC] hover:border ease-in-out duration-300 '>Continue</button>
                </form>
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