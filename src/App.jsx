// import { Route, Routes, BrowserRouter } from 'react-router'
import Performance from './components/Performance'
import Transfers from './components/Transfers'
import Summary from './components/Summary'
import SharedLayout from './components/SharedLayout'
import './App.css'

function App() {


  return (
    // <BrowserRouter>
    //   <Routes>
    //     {/* <Route path="/" element={<SharedLayout />}> */}
    //       {/* <Route index element={<Summary />} /> */}
    //       <Route path="transfers" element={<Transfers />} />
    //       <Route path="performance" element={<Performance />} />
    //     {/* </Route> */}
    //   </Routes>
    // </BrowserRouter>
    <Performance />
  )
}

export default App
