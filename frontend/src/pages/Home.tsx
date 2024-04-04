export default function Home({ publicKey }: { connection: any; publicKey:any }) {
    return (
        <div className="pt-4">
            <h1 className="text-white text-3xl font-bold">Welcome to CAOS</h1>
            <p className='text-mainColor'>{publicKey ? "Connected at address: " + publicKey.toString() : "Connect your wallet in the header to get started!"}</p>
            
        </div>
    )
}