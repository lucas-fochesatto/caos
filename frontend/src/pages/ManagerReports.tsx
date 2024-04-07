import { useNavigate } from 'react-router-dom';
import pdf from '../assets/pdf.svg';
import img4 from '../assets/img4.png';
import { GetAccountResult } from '../types/account';

export default function Reports({account} : {account:SDKState}) {
    const navigate = useNavigate()

    return (
        <>
        <div className="items-center flex justify-center flex-col ">
            <div>
                <img src={img4} alt="" />
            </div>
            <div className="flex flex-row items-baseline">
                <div className="flex items-end flex-grow w-[65vw] h-px bg-[#6D9EEB]"></div>
                <button className="flex items-center p-2 text-white text-xl bg-[#6D9EEB]">New Entry</button>
            </div>
            <div>
                <div className = "mt-4 p-2 px-4 bg-[#1055CC] w-[100vh] text-white text-left font-bold">
                    Reports on revenues, maintenance, services, contracts ands goals
                </div>
                <div className='py-4'>
                    <div className='flex gap-4 cursor-pointer hover:border-[#1055CC] hover:border-b'>
                        <img src={pdf} alt="" />
                        <div className='text-white text-left py-4 '>
                            <p>04/04/2024</p>
                            <p>Maintence requests status update</p>
                        </div>
                    </div>
                    <div className='flex gap-4 cursor-pointer hover:border-[#1055CC] hover:border-b'>
                        <img src={pdf} alt="" />
                        <div className='text-white text-left py-4 '>
                            <p>02/04/2024</p>
                            <p>Past month service report</p>
                        </div>
                    </div>
                    <div className='flex gap-4 cursor-pointer hover:border-[#1055CC] hover:border-b'>
                        <img src={pdf} alt="" />
                        <div className='text-white text-left py-4 '>
                            <p>31/03/2024</p>
                            <p>New cleaning provider contract report</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}