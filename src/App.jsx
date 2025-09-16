import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import BecomePartner from './pages/BecomePartner'


function App() {
  return (
    <>

      <Navbar />

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/become-partner' element={<BecomePartner />} />
      </Routes>
    
      <Footer />
    </>
  )
}

export default App
