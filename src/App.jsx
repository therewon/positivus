import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import PricingPage from './pages/PricingPage'
import ServicesPage from './pages/ServicesPage'
import UseCasesPage from './pages/UseCasesPage'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/about-us' element={<AboutPage />}/>
        <Route path='/blog' element={<BlogPage />}/>
        <Route path='/pricing' element={<PricingPage/>}/>
        <Route path='/services' element={<ServicesPage />}/>
        <Route path='/use-cases' element={<UseCasesPage />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
