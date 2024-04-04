import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

function App() {
  const { connection } = useConnection();
  const wallet = useWallet();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout connection={connection} wallet={wallet}/>}>
          <Route path="/" element={<Home connection={connection} wallet={wallet} />} />
          <Route path="/login" element={<Login connection={connection} wallet={wallet} />} />
          <Route path="/dashboard" element={<Dashboard connection={connection} wallet={wallet} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
