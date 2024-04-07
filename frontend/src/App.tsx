import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
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

import {useSDK} from "@metamask/sdk-react-ui";

function App() {
  const account = useSDK()

  
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
        <Route path="/" element={<Layout account={account}/>}>
          <Route path="/" element={<Home account={account} />} />
          <Route path="/login" element={<Login account={account} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/overview" element={<Overview account={account} />} />
          <Route path="/reports" element={<Reports account={account} />} />
          <Route path="/requests" element={<Requests account={account} />} />
          <Route path="/events" element={<Events account={account} />} />
          <Route path="/manager" element={<ManagerLogin account={account} />} />
          <Route path="/manager/signup/1" element={<ManagerWalletConnect account={account} />} />
          <Route path="/manager/signup/2" element={<ManagerBuildingInfo info={manager} account={account} />} />
          <Route path="/manager/signup/3" element={<ManagerOwnersInfo info={manager} account={account} />} />
          <Route path="/manager/overview" element={<ManagerOverview account={account} />} />
          <Route path="/manager/reports" element={<ManagerReports account={account} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
