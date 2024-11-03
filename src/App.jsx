import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import ContactPage from './Pages/ContactPage';
import AboutPage from './Pages/AboutPage';
import Raisefundform2 from './Components/Raisefundform2';
import FoundPage from './Pages/FoundPage';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup'
import Signin from './Components/Signin'
import FundRaiseForm from './Components/FundRaiseForm'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/fund_raise" element={<FundRaiseForm />} />
        </Routes>
      </Router>
    </>

  )
}

export default App
