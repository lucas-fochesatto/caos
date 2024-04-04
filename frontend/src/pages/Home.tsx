import cF from '../assets/cashFlow.png';
import img2 from '../assets/img2.png';

export default function Home({ publicKey }: { connection: any; publicKey:any }) {
    return (
        <>
            <div className="p-16 flex items-center justify-around gap-20">
                <div className="w-[40vw] text-left">
                    <p className="text-4xl text-white font-extralight"><span className="font-semibold text-[#407BFF]">Efficient</span> and <span className="font-semibold text-[#407BFF]">transparent</span> management of buildings is the future </p>
                    <p className='mt-5 text-xl text-white font-extralight'>CAOS simplifies transparency policies and makes compliance easier than ever.</p>

                    <div className='flex items-center gap-20 w-100% justify-center mt-12'>
                        <button className='w-[7vw] py-2 rounded text-white bg-[#6D9EEB] font-bold'>SIGN UP</button>
                        <button className='w-[7vw] py-2 rounded text-[#6D9EEB] border-[#1155CC] border bg-transparent font-bold'>LOGIN</button>
                    </div>
                </div>
                <img src={img2} alt="" className= 'w-[40vw]'/>
            </div>
            <div className="p-16 flex items-center justify-around gap-20">
                <img src={cF} alt="" className= 'w-[40vw]'/>
                <div className="w-[40vw] text-left">
                    <p className="text-4xl text-white font-extralight"><span className="font-semibold text-[#407BFF]">CAOS</span> is the way for your building to be a DAO</p>
                    <p className='mt-5 text-xl text-white font-extralight'>From rent collecting to evaluating non-recurring expenses submitted to approval by owners, <span className="font-semibold text-[#407BFF]">CAOS</span> is the solution. </p>

                    <div className='flex items-center gap-20 w-100% justify-center mt-12'>
                        <button className='px-4 py-2 rounded text-[#6D9EEB] border-[#1155CC] border bg-transparent font-bold'>LEARN MORE</button>
                    </div>
                </div>
            </div>
        </>

        
    )
}