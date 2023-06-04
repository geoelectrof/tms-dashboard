import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Performance from './components/Performance'
import Shipments from './components/Shipments'
import SingleShipment from './components/SingleShipment'
import Summary from './components/Summary'
import SharedLayout from './components/SharedLayout'
import { useDispatch } from 'react-redux'
import { checkStatusChange } from './features/transports/shipmentsSlice'
import { useState } from 'react'

import './App.scss'
import { useEffect } from 'react'

function App() {

  const dispatch = useDispatch()
 
  const [todayDate, setTodayDate] = useState(new Date().setHours(0,0,0,0))
  
  setInterval(() => {
    if (todayDate != new Date().setHours(0, 0, 0 ,0)) {
      setTodayDate(new Date().setHours(0, 0, 0, 0))
    }
  } , 1000 * 60 *60 )
    
  useEffect(() => {
    dispatch(checkStatusChange())
  }, [todayDate])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Summary />} />
          <Route path="shipments" element={<Shipments />} />
          <Route path="shipments/:shipmentId" element={<SingleShipment />} />
          <Route path="performance" element={<Performance />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
