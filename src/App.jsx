import { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Wallets from './pages/Wallets';
import Transiction from './pages/Transictions';
import Exchange from './pages/Exchange';
import Market from './pages/Market';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const account = localStorage.getItem('user');
      if (account) {
        const userData = JSON.parse(account);
        try {
          const response = await fetch(`http://localhost:8080/users/${userData.id}`);
          const data = await response.json();
          localStorage.setItem('user', JSON.stringify(data));
          setUser(data);
        } catch (error) {
          console.error('Ошибка при получении данных пользователя:', error);
        }
      }
    };

    fetchUser();
  }, []);

  const addWallet = (newWallet) => {
    newWallet.balance = parseFloat(newWallet.balance);
    newWallet.cardNumber = parseFloat(newWallet.cardNumber);

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
            setUser({ ...user, wallets: updatedData.wallets });
          })
          .catch((error) => console.error('Ошибка при обновлении кошельков:', error));
      })
      .catch((error) => console.error('Ошибка при получении данных пользователя:', error));
  };

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout user={user}/>}>
          <Route index element={<Home user={user}/>}></Route>
          <Route path='/wallets' element={<Wallets add={addWallet} user={user}/>}></Route>
          <Route path='/transictions' element={<Transiction user={user} set={setUser}/>}></Route>
          <Route path='/exchange' element={<Exchange />}></Route>
          <Route path='/market' element={<Market />}></Route>
        </Route>
        <Route path='/signup' element={<Login path={false} />}></Route>
        <Route path='/signin' element={<Login path={true} />}></Route>
      </Routes>
    </>
  );
}

export default App;
