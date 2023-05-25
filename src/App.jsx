import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Performance from './components/Performance'
import Shipments from './components/Shipments'
import SingleShipment from './components/singleShipment'
import Summary from './components/Summary'
import SharedLayout from './components/SharedLayout'

import './App.scss'

function App() {


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
