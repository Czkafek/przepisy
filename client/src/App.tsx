import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Account from './pages/Account/Account'
import Search from './pages/Search/Search'
import Recipe from './pages/Recipe/Recipe'
import NotFoundPage from './pages/NotFound/NotFoundPage'


export default function App() {

  return <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/account" element={<Account />} />
      <Route path="/recipe" element={<Recipe />} />
      <Route path="/search" element={<Search />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </>
}

