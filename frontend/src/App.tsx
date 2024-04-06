import './App.css'
import {getProperties, getProperty, addProperty} from '../database.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Overview from './pages/Overview'
import Reports from './pages/Reports'
import Requests from './pages/Requests'
import Events from './pages/Events'
import ManagerLogin from './pages/ManagerLogin'
import ManagerWalletConnect from './pages/ManagerWalletConnect'
import ManagerBuildingInfo from './pages/ManagerBuildingInfo'
import { ManagerSignupInfo } from './types/managerSignupInfo'
import { useEffect, useState } from 'react'
import ManagerOwnersInfo from './pages/ManagerOwnersInfo'
import ManagerOverview from './pages/ManagerOverview'
import ManagerReports from './pages/ManagerReports'
import writeJSON from './utils/writeJSON'




function App() {
  const { connection } = useConnection();
  const wallet = useWallet();

  const [manager, setManager] = useState<ManagerSignupInfo | null>(null);


  useEffect(() => {
    const newManager : ManagerSignupInfo = {
      buldingName: "oi",
      numberUnits: 0,
      residents: []
    } 
    setManager(newManager)
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout connection={connection} wallet={wallet}/>}>
          <Route path="/" element={<Home connection={connection} wallet={wallet} />} />
          <Route path="/login" element={<Login connection={connection} wallet={wallet} />} />
          <Route path="/signup" element={<SignUp connection={connection} wallet={wallet} />} />
          <Route path="/overview" element={<Overview connection={connection} wallet={wallet} />} />
          <Route path="/reports" element={<Reports connection={connection} wallet={wallet} />} />
          <Route path="/requests" element={<Requests connection={connection} wallet={wallet} />} />
          <Route path="/events" element={<Events connection={connection} wallet={wallet} />} />
          <Route path="/manager" element={<ManagerLogin connection={connection} wallet={wallet} />} />
          <Route path="/manager/signup/1" element={<ManagerWalletConnect connection={connection} wallet={wallet} />} />
          <Route path="/manager/signup/2" element={<ManagerBuildingInfo info={manager} connection={connection} wallet={wallet} />} />
          <Route path="/manager/signup/3" element={<ManagerOwnersInfo info={manager} connection={connection} wallet={wallet} />} />
          <Route path="/manager/overview" element={<ManagerOverview connection={connection} wallet={wallet} />} />
          <Route path="/manager/reports" element={<ManagerReports connection={connection} wallet={wallet} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
