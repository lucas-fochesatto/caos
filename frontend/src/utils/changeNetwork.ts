import { useNavigate } from "react-router-dom";

export default async function changeNetwork() {
    const navigate = useNavigate()

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

                        navigate('/overview')
                } catch (addError) {
                    // Handle "add" error.
                }
            }
            // Handle other "switch" errors.
        }
    } else {
        navigate('/overview')
    }
}