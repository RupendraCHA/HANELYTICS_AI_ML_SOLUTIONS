// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SignUp from './SignIn/signUp'
import Login from './Login/Login'
import Home from './Home/Home.jsx'
import InitialPage from './InitialPage/InitialPage'
import DataModels from './dataModels/dataModels.jsx'
import DataModeling from './DataModelingPage/DataModeling.jsx'
import NotFound from './NotFound/NotFound.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NewChart from './NewChart/NewChart.jsx'
// import Footer from "./Footer/Footer.jsx"


function App() {
  return (<>
        <ToastContainer />
        <Routes>
          <Route exact path='/' element={<InitialPage />}></Route>
          <Route exact path='/register' element={<SignUp />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/home' element={<Home />}></Route>
          {/* <Route exact path='/dataModels' element={<DataModels />}></Route> */}
          <Route exact path='/dataModeling' element={<DataModeling />}></Route>
          <Route exact path='/newChart' element={<NewChart />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </>
  )
}

export default App
