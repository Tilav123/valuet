import { useEffect, useState } from 'react'
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
  let [user, setUSer] = useState()
  function AddWallet(newWallet) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      console.error('User not found');
      return;
    }
    fetch(`http://localhost:8080/users/${user.id}`)
      .then((response) => response.json())
      .then((data) => {
        const existingWallets = data.wallets || [];
        fetch(`http://localhost:8080/users/${user.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            wallets: [...existingWallets, newWallet],
          }),
        })
          .then((response) => response.json())
          .then((updatedData) => {
            console.log('Обновленный объект:', updatedData);
            localStorage.setItem('user', JSON.stringify({ ...user, wallets: updatedData.wallets }));
          })
          .catch((error) => console.error('Ошибка при обновлении кошельков:', error));
      })
      .catch((error) => console.error('Ошибка при получении данных пользователя:', error));
  }
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='/wallets' element={<Wallets add={AddWallet} />}></Route>
          <Route path='/transictions' element={<Transiction />}></Route>
          <Route path='/exchange' element={<Exchange />}></Route>
          <Route path='/market' element={<Market />}></Route>
        </Route>
        <Route path='/signup' element={<Login path={false} />}></Route>
        <Route path='/signin' element={<Login path={true} />}></Route>
      </Routes>
    </>
  )
}

export default App
