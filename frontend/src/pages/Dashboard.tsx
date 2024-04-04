import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import '../wallet-button.css'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { WalletContextState } from "@solana/wallet-adapter-react";

export default function Home({ connection, wallet }: { connection: any; wallet:WalletContextState }) {
    // Check if user is logged in:
    useEffect(() => {
        if(wallet.connected) {
            
        }
    }, [wallet])
    
    return (
        <>
            <div className="p-16 items-center flex justify-center flex-col">
                <h1 className="text-4xl text-white">CONECTADO EM {wallet.publicKey?.toString()}</h1>
            </div>
        </>
    )
}