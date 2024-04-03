import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import { connectPhantom } from './utils/connectPhantom'

function App() {
  const [account, setAccount] = useState<string | null>(null)

  async function connectWallet(): Promise<void> {
    const connection = await connectPhantom()
    setAccount(connection?.address)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout connectWallet={connectWallet} account={account} />}>
          <Route path="/" element={<Home account={account} />} />
        </Route>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
