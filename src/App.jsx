import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

 // import Navbar from './Components/Navbar'
import MainPage from './Pages/MainPage'
import RaisingFundform from './Components/RaisingFundform'
   
function App() {
  return (
    <>
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
