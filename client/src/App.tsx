import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Account from './pages/Account/Account'
import Search from './pages/Search/Search'
import Recipe from './pages/Recipe/Recipe'
import NotFoundPage from './pages/NotFound/NotFoundPage'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

export default function App() {

  return <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/account" element={<Account />} />
      <Route path="/recipe/:name" element={<Recipe />} />
      <Route path="/search" element={<Search />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </>
}

