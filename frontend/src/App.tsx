import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'

function App() {
  const { connection } = useConnection();
  const { publicKey } = useWallet();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home connection={connection} publicKey={publicKey} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
