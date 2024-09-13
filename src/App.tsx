// BOOTSTRAP MIN FILE => IMPORT ALL ATTRIBUTES AND CSS FUNCTIONALITY
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Admin from './pages/admin/Admin'
import { Login } from './pages/login/Login'
import { NAV_LINKS } from './constant/NavLinks'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={NAV_LINKS.HOME} element={<Home />}/>
          <Route path={NAV_LINKS.ADMIN} element={<Admin />}/>
          <Route path={NAV_LINKS.AUTH} element={<Login />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
