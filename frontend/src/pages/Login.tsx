import '../wallet-button.css'
import { useEffect } from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { MetaMaskButton, SDKState, useAccount} from "@metamask/sdk-react-ui";

export default function Login({account} : {account:SDKState}) {
    const navigate = useNavigate()
    const wallet = useAccount()

    useEffect(() => {
        const checkDatabase = async () => {
            let exists = false
            const dburl = 'http://localhost:8080/'
            // const dburl = 'https://caosdatabase.onrender.com/'
            const options = {
                method: 'GET',
                mode: 'cors'
            }
            const send = await fetch(dburl + 'Residents', options)
            const residents = await send.json()
            const walletAddress = wallet.address.toString()
            for(const resident of residents) {
                console.log(resident.wallet.toString())
                if(walletAddress.startsWith(resident.wallet)) {
                    console.log('ENTREI')
                    navigate('/overview')
                    exists = true
                    break
                }
            }
        }

        if(account.connected)  {
            const checkChain = async () => {
                const chainId = await window.ethereum.request({ method: "eth_chainId"})
                if(chainId != "0xe9ac0ce") {
                    console.log(chainId)
                    console.log("NOT CONNECTED TO NEON!")

                    try {
                        await window.ethereum 
                            .request({
                                method: "wallet_switchEthereumChain",
                                params: [{ chainId: "0xf00" }],
                            });
                    } catch (switchError) {
                        // This error code indicates that the chain has not been added to MetaMask.
                        if (switchError.code === 4902) {
                            try {
                                await window.ethereum // Or window.ethereum if you don't support EIP-6963.
                                    .request({
                                        method: "wallet_addEthereumChain",
                                        params: [
                                            {   
                                                chainId: "0xe9ac0ce",
                                                chainName: "Neon EVM DevNet",
                                                rpcUrls: ["https://devnet.neonevm.org/"],
                                                nativeCurrency: {
                                                    decimals: 18,
                                                    name: "NEON",
                                                    symbol: "NEON"
                                                }
                                            },
                                        ],
                                    });

                                    // navigate('/overview')
                            } catch (addError) {
                                // Handle "add" error.
                            }
                        }
                        // Handle other "switch" errors.
                    }
                }
            }
            checkChain()
        }

        if(wallet.address) {
            checkDatabase()
        }
    }, [account.connected, wallet.address])
    
    return (
        <>
            <div className="p-16 items-center flex justify-center flex-col">
                <div className="border border-[#1155CC] w-[45vw] py-10">
                    <p className="mb-12 text-white font-regular text-3xl">Connect your wallet to login</p>
                    <MetaMaskButton color="blue"/>
                </div>
                <div className="mt-20 w-[45vw]">
                    <div className="flex justify-between">
                        <p className="text-white text-2xl">Are you a building administrator?</p>
                        <a href="/manager" className="text-[#6D9EEB] text-2xl underline	">click here</a>
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