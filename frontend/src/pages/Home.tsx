export default function Home({ account}: { account: string | null; }) {
    return (
        <div className="pt-4">
            <h1 className="text-3xl font-bold">Welcome to CAOS</h1>
            <p>Connect your wallet in the header to get started!</p>
        </div>
    )
}