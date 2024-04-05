import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import checked from '../assets/checked.svg'
import checkedb from '../assets/checked-blue.svg'
import '../wallet-button.css'
import { useEffect } from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { WalletContextState } from "@solana/wallet-adapter-react";

export default function ManagerWalletConnect({ connection, wallet }: { connection: any; wallet:WalletContextState }) {
    const navigate = useNavigate()
    
    // Check if user is logged in:
    useEffect(() => {
        if(wallet.publicKey) {
            navigate('/manager/signup/2')
        }
    }, [wallet.publicKey])
    
    return (
        <>
            <div className="p-16 items-center flex justify-center flex-col">
                <div className="mb-10 text-center text-white">
                    <h1 className="text-3xl">Welcome, dear manager!</h1>
                    <p className="text-2xl text-[#6D9EEB]">Thank you for choosing us</p>
                </div>
                <div className="w-[45vw] py-10">
                    <p className="mb-12 text-white font-regular text-3xl">Connect your wallet to get started</p>
                    <WalletMultiButton />
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