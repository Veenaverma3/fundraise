import './App.css'
import Diseace1 from './Components/Diseace1'
import Contact from './Pages/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

 // import Navbar from './Components/Navbar'
import MainPage from './Pages/MainPage'
import RaisingFundform from './Components/RaisingFundform'
   
function App() {
  return (
    <>
      {/* <MainPage /> */}
      <Contact />
      {/* <Diseace1 /> */}
    <Router>
    <MainPage />
       <Routes>
        {/* <Route path='/' element={<MainPage/>}/> */}
        <Route path='/raiser' element={<RaisingFundform/>}/>
      </Routes>
    </Router>
    {/* <Navbar/> */}
    </>

  )
}

export default App
