import checked from '../assets/checked.svg'
import '../wallet-button.css'
import { useEffect } from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { GetAccountResult } from "../types/account";
import { MetaMaskButton } from "@metamask/sdk-react-ui";

export default function ManagerWalletConnect({account} : {account:SDKState}) {
    const navigate = useNavigate()
    
    // Check if user is logged in:
    useEffect(() => {
        if(account.connected) {
            navigate('/manager/signup/2')
        }
    }, [account.connected])
    
    return (
        <>
            <div className="p-16 items-center flex justify-center flex-col">
                <div className="mb-10 text-center text-white">
                    <h1 className="text-3xl">Welcome, dear manager!</h1>
                    <p className="text-2xl text-[#6D9EEB]">Thank you for choosing us</p>
                </div>
                <div className="w-[45vw] py-10">
                    <p className="mb-12 text-white font-regular text-3xl">Connect your wallet to get started</p>
                    <MetaMaskButton color='blue' />
                </div>
                <div className= "absolute right-12 border border-[#1155CC] p-5 rounded" >
                    <div className="flex items-center gap-3">
                        <img src={checked} alt="" />
                        <p className="text-[#717171]">Connect Wallet</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <img src={checked} alt="" />
                        <p className="text-[#717171]">Building Info</p>
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