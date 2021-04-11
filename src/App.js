import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, NavLink } from 'react-router-dom';
import * as appAC from './redux/actionCreators/kittens';
import './App.css';

import Main from './Components/Main';
import Favorite from './Components/Favorite';

import paw from './assets/paw.png';
import cat from './assets/sandbox.png';

function App() {
  // Данный стейт используется для отображения
  // лоудера, если котики ещё не загрузились
  const [isLoading, setLoadStatus] = useState(true);

  const dispatch = useDispatch();

  //При помощи селекторов мы получаем наш state,
  //для передачи дочерним компонентам в виде props

  const kittens = useSelector((state) => state.kittens);
  const favorite = useSelector((state) => state.favorite);

  //Здесь мы вызываем экшн, который отправляет запрос на CatsAPI,
  //чтобы получить данные для главной страницы

  useEffect(() => dispatch(appAC.loadKittens(setLoadStatus)), [dispatch]);
  return (
    <div className='App'>
      <div className='header'>
        <NavLink className='link' to={`/`}>
          <div className='linkWrapper' tabIndex='1'>
            <span>Все котики</span>
          </div>
          <img className='menuIcon' src={cat} alt='menuIcon' />
        </NavLink>
        <NavLink className='link' to={`/favorites`}>
          <div className='linkWrapper' tabIndex='2'>
            <span>Любимые котики</span>
          </div>
          <img className='menuIcon' src={paw} alt='menuIcon' />
        </NavLink>
      </div>
      <Route
        exact
        path='/'
        render={() => <Main kittens={kittens} isLoading={isLoading} />}
      />
      <Route
        exact
        path='/favorites'
        render={() => <Favorite favorite={favorite} />}
      />
    </div>
  );
}

export default App;
