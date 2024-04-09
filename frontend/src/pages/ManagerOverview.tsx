import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import '../wallet-button.css'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import check from '../assets/checked-blue.svg';
import { GetAccountResult } from "../types/account";
import { SDKState } from "@metamask/sdk-react-ui";

export default function Home({account} : {account:SDKState}) {
    const navigate = useNavigate()
    
    // Check if user is logged in:
    useEffect(() => {
        if(!account.connected) {
            navigate('/manager')
        }
    }, [account.connected])
    
    const data = [
        { apartment: 1, resident: "0x1234567890abcdef", status: "paid" },
        { apartment: 2, resident: "0xabcdef1234567890", status: "not paid" },
        { apartment: 3, resident: "0x9876543210fedcba", status: "paid" },
        { apartment: 4, resident: "0xfedcba0987654321", status: "not paid" },
        { apartment: 5, resident: "0x13579ace2468bdf", status: "paid" },
      ];
    
    return (
        <>
            <div className="py-12 px-24 items-left flex justify-between">
                <div className="w-[40vw]">
                    <h1 className="py-2 text-5xl font-bold mb-12 text-white text-left">Building Name</h1> {/* Centered text */}
                    <h1 className="text-4xl mb-16 text-white text-left">Welcome, dear manager!</h1> {/* Centered text */}
                    <p className="text-3xl mb-8 ml-12 text-white text-left">Token balance: <span className='text-[#407BFF]'>tokenBalance</span></p>
                    <div className="flex items-center gap-5 ">
                        <p className="text-3xl ml-12 text-white text-left">Bills to pay: <span className='text-[#407BFF]'>bills</span></p>
                        <button className='w-[7vw] py-2 rounded text-white bg-[#6D9EEB] font-bold hover:bg-transparent hover:text-[#6D9EEB] hover:border-[#1155CC] hover:border ease-in-out duration-300 '>Pay bills</button>
                    </div>
                </div>
                <div className="w-[50vw]">
                    <table className="table-auto w-full text-xl">
                        <thead>
                            <tr>
                            <th className="border-b border-gray-500 px-4 py-2 text-white font-bold">Apartment</th>
                            <th className="border-b border-gray-500 px-4 py-2 text-white font-bold">Resident</th>
                            <th className="border-b border-gray-500 px-4 py-2 text-white font-bold">Status</th>
                            <th className="border-b border-gray-500 px-4 py-2 text-white font-bold">Manage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, index) => (
                            <tr key={index}>
                                <td className="border-b border-gray-500 px-4 py-2 text-white font-bold">{row.apartment}</td>
                                <td className="border-b border-gray-500 px-4 py-2 text-white font-bold">{row.resident}</td>
                                <td className={`border-b border-gray-500 px-4 py-2 font-bold ${row.status === 'paid' ? 'text-blue-500' : 'text-red-500'}`}>{row.status}</td>
                                <td className="border-b border-gray-500 px-4 py-2 text-white font-bold">
                                <button className='w-[7vw] py-2 rounded text-white bg-[#6D9EEB] font-bold hover:bg-transparent hover:text-[#6D9EEB] hover:border-[#1155CC] hover:border ease-in-out duration-300 '>Edit</button>    
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    <button className='mt-10 px-4 py-2 rounded text-white bg-[#6D9EEB] font-bold hover:bg-transparent hover:text-[#6D9EEB] hover:border-[#1155CC] hover:border ease-in-out duration-300 '>Add a new resident</button>
                </div>
            </div>
        </>
    )
}