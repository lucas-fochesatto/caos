import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import '../wallet-button.css'
import { useEffect } from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { WalletContextState } from "@solana/wallet-adapter-react";

export default function Home({ connection, wallet }: { connection: any; wallet:WalletContextState }) {
    const navigate = useNavigate()
    
    // Check if user is logged in:
    useEffect(() => {
        if(wallet.publicKey) {
            navigate('/dashboard')
        }
    }, [wallet.publicKey])
    
    return (
        <>
            <div className="p-16 items-center flex justify-center flex-col">
                <div className="border border-[#1155CC] w-[45vw] py-10">
                    <p className="mb-12 text-white font-regular text-3xl">Connect your wallet to login</p>
                    <WalletMultiButton />
                </div>
                <div className="mt-20 w-[45vw]">
                    <div className="flex justify-between">
                        <p className="text-white text-2xl">Are you a building administrator?</p>
                        <a href="" className="text-[#6D9EEB] text-2xl underline	">click here</a>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-white text-2xl">New here?</p>
                        <a href="" className="text-[#6D9EEB] text-2xl underline	">learn more</a>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-white text-2xl">Id not found?</p>
                        <a href="" className="text-[#6D9EEB] text-2xl underline	">sign up</a>
                    </div>
                </div>  
            </div>
            <Footer />
        </>
    )
}