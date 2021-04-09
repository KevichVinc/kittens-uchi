import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import * as appAC from './redux/actionCreators/kittens';
import './App.css';

import Main from './Components/Main';
import Favorite from './Components/Favorite';

function App() {
  const dispatch = useDispatch();
  const kittens = useSelector((state) => state.kittens);
  const favorite = useSelector((state) => state.favorite);
  useEffect(() => dispatch(appAC.loadKittens()), [dispatch]);
  return (
    <div className='App'>
      <div className='header'></div>
      <Route exact path='/' render={() => <Main kittens={kittens} />} />
      <Route
        exact
        path='/favorite'
        render={() => <Favorite favorite={favorite} />}
      />
    </div>
  );
}

export default App;
