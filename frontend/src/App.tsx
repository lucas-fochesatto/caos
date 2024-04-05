import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import Login from './pages/Login'
import Overview from './pages/Overview'

function App() {
  const { connection } = useConnection();
  const wallet = useWallet();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout connection={connection} wallet={wallet}/>}>
          <Route path="/" element={<Home connection={connection} wallet={wallet} />} />
          <Route path="/login" element={<Login connection={connection} wallet={wallet} />} />
          <Route path="/overview" element={<Overview connection={connection} wallet={wallet} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
