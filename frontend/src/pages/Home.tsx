import { useNavigate } from 'react-router-dom';
import cF from '../assets/cashFlow.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import { WalletContextState } from '@solana/wallet-adapter-react';



export default function Home({ connection, wallet }: { connection: any; wallet:WalletContextState }) {
    const navigate = useNavigate()

    return (
        <>
            <div className="p-16 flex items-center justify-around gap-20">
                <div className="w-[40vw] text-justify">
                    <p className="text-4xl text-white font-extralight"><span className="font-semibold text-[#407BFF]">Efficient</span> and <span className="font-semibold text-[#407BFF]">transparent</span> management of buildings is the future </p>
                    <p className='mt-5 text-xl text-white font-extralight'>CAOS simplifies transparency policies and makes compliance easier than ever.</p>

                    <div className='flex items-center gap-20 w-100% justify-center mt-12'>
                        <button onClick={() => navigate('/SignUp')} className='w-[7vw] py-2 rounded text-white bg-[#6D9EEB] font-bold hover:bg-transparent hover:text-[#6D9EEB] hover:border-[#1155CC] hover:border ease-in-out duration-300 '>SIGN UP</button>
                        <button onClick={() => navigate('/login')} className='w-[7vw] py-2 rounded text-[#6D9EEB] border-[#1155CC] border bg-transparent font-bold hover:bg-[#6D9EEB] hover:text-white ease-in-out duration-300'>LOGIN</button>
                    </div>
                </div>
                <img src={img2} alt="" className= 'w-[40vw]'/>
            </div>
            <div className="p-16 flex items-center justify-around gap-20">
                <img src={cF} alt="" className= 'w-[40vw]'/>
                <div className="w-[40vw] text-justify">
                    <p className="text-4xl text-white font-extralight"><span className="font-semibold text-[#407BFF]">CAOS</span> is the way for your building to be a DAO</p>
                    <p className='mt-5 text-xl text-white font-extralight'>From rent collecting to evaluating non-recurring expenses submitted to approval by owners, <span className="font-semibold text-[#407BFF]">CAOS</span> is the solution. </p>

                    <div className='flex items-center gap-20 w-100% justify-center mt-12'>
                        <button className='px-4 py-2 rounded text-[#6D9EEB] border-[#1155CC] border bg-transparent font-bold hover:bg-[#6D9EEB] hover:text-white ease-in-out duration-300'>LEARN MORE</button>
                    </div>
                </div>
            </div>
            <div className="p-16 flex items-center justify-around gap-20">
                <div className="w-[40vw] text-justify">
                    <p className="text-4xl text-white font-extralight">Every individual keeps a <span className="font-semibold text-[#407BFF]">clear understanding</span> of ongoing events and plays a <span className="font-semibold text-[#407BFF]">role </span>in future decisions.</p> 
                    <p className='mt-5 text-xl text-white font-extralight'>Financial data & metrics available intuitively in Dashboard section and token-based voting system for issued decisions.  </p>

                    <div className='flex items-center gap-20 w-100% justify-center mt-12'>
                        <button onClick={() => navigate('/login')} className='w-[7vw] py-2 rounded text-white bg-[#6D9EEB] font-bold hover:bg-transparent hover:text-[#6D9EEB] hover:border-[#1155CC] hover:border ease-in-out duration-300'>SIGN UP</button>
                    </div>
                </div>
                <img src={img3} alt="" className= 'w-[40vw]'/>
            </div>
        </>
    )
}