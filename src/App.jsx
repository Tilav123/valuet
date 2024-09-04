import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Wallets from './pages/Wallets';
import Transiction from './pages/Transictions';
import Exchange from './pages/Exchange';
import Market from './pages/Market';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path='/wallets' element={<Wallets/>}></Route>
          <Route path='/transictions' element={<Transiction/>}></Route>
          <Route path='/exchange' element={<Exchange/>}></Route>
          <Route path='/market' element={<Market/>}></Route>
        </Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </>
  )
}

export default App
