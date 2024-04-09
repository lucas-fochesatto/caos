import { useNavigate } from 'react-router-dom';
import info from '../assets/infoLogo.svg';
import img4 from '../assets/img4.jpg';
import { useState } from 'react';
import { GetAccountResult } from '../types/account';

export default function Requests({account} : {account:SDKState}) {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    

    return (
        <>
            <div className="items-center flex justify-center flex-col ">
                <div className='w-full flex justify-center'>
                    <img src={img4} alt="" />
                </div>
                <div>
                    <div className='py-10 px-14 w-[100vw]'>
                        <button onClick={() => setIsOpen(true)} className='px-4 py-2 rounded text-white bg-[#6D9EEB] font-bold hover:bg-transparent hover:text-[#6D9EEB] hover:border-[#1155CC] hover:border ease-in-out duration-300 '>New Request</button>
                        <div className="my-6  text-[#6D9EEB] text-left border-b border-[#6D9EEB]">
                            <h1 className='font-bold'>Requests</h1>
                        </div>
                        <div className='flex justify-between '> 
                            <div className='flex gap-14 items-center'>
                                <img src={info} alt="" className='w-[40px]' />
                                <p className='text-white '>Fix hall's lights</p>    
                            </div>
                            <div className='flex gap-x-3'>
                                <button className='px-6 py-2 rounded text-white bg-[#FB5E4D] font-bold hover:bg-transparent hover:text-[#6D9EEB] hover:border-[#1155CC] hover:border ease-in-out duration-300'>Vote against</button>
                                <button className='px-6 py-2 rounded text-white bg-[#6D9EEB] font-bold hover:bg-transparent hover:text-[#6D9EEB] hover:border-[#1155CC] hover:border ease-in-out duration-300'>Vote for</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen ?
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl">
                        <h2 className="text-lg font-semibold mb-4">Submit a Problem</h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="problemDescription" className=" block text-sm font-medium text-gray-700">
                                    Problem Description
                                </label>
                                <textarea id="problemDescription" className="py-2 px-4 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    /* value={problemDescription} onChange={(e) => setProblemDescription(e.target.value)} */ required
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                    Price
                                </label>
                                <input type="number" id="price" className="py-2 px-4 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    /* value={price} onChange={(e) => setPrice(e.target.value)} */ required />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                                    onClick={() => setIsOpen(false)}
                                
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-gray-300 hover:bg-gray-500 text-gray-700 font-bold py-2 px-4 rounded"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                : ""
            }
        </>
    )
}