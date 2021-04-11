import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, NavLink } from 'react-router-dom';
import * as appAC from './redux/actionCreators/kittens';
import './App.css';

import Main from './Components/Main';
import Favorite from './Components/Favorite';

function App() {
  const [isLoading, setLoadStatus] = useState(true);

  const dispatch = useDispatch();
  const kittens = useSelector((state) => state.kittens);
  const favorite = useSelector((state) => state.favorite);

  useEffect(() => dispatch(appAC.loadKittens(setLoadStatus)), [dispatch]);
  return (
    <div className='App'>
      <div className='header'>
        <NavLink className='link' to={`/`}>
          <div className='linkWrapper' tabIndex='1'>
            <span>Все котики</span>
          </div>
        </NavLink>
        <NavLink className='link' to={`/favorites`}>
          <div className='linkWrapper' tabIndex='2'>
            <span>Любимые котики</span>
          </div>
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
