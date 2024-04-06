import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import '../wallet-button.css'
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { WalletContextState } from "@solana/wallet-adapter-react";

import checked from '../assets/checked.svg'
import checkedb from '../assets/checked-blue.svg'
import { ManagerSignupInfo } from "../types/managerSignupInfo";

export default function ManagerOwnersInfo({ info ,connection, wallet }: { info: ManagerSignupInfo | null ;connection: any; wallet:WalletContextState }) {
    const navigate = useNavigate()
    
    const [current, setCurrent] = useState(0)
    const [input, setInput] = useState({
        publicKey: ""
    })
    
    // Check if user is logged in:
    useEffect(() => {
        if(!wallet.publicKey) {
            navigate('/manager')
        }
    }, [wallet.publicKey])

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

    const handleSubmit = (event) => {
        if(info) {
            event.preventDefault()
            info.residents.push(event.target[0].value)
            console.log(info)
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
                    <button className='mt-10 w-[7vw] py-2 rounded text-white bg-[#6D9EEB] font-bold hover:bg-transparent hover:text-[#6D9EEB] hover:border-[#1155CC] hover:border ease-in-out duration-300 '>Submit</button>
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