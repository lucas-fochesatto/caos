import cF from '../assets/cashFlow.png';

export default function Home({ publicKey }: { connection: any; publicKey:any }) {
    return (
        <div className="pt-4">
            <h1 className="text-white text-3xl font-bold">Welcome to CAOS</h1>
            <p className='text-mainColor'>{publicKey ? "Connected at address: " + publicKey.toString() : "Connect your wallet in the header to get started!"}</p>
            <div className='px-10 grid grid-cols-2 gap-4'>
            <div className="p-4 flex items-center justify-center">
            <img 
                        src={cF} 
                        alt="Logo" 
                        className="h-full" 
                    />
            </div>
                    <h2 className='text-white text-center justify-center'>Help aaaaaaaaaaaa</h2>
            </div>
            
            
        </div>
    )
}