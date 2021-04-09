import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as appAC from '../redux/actionCreators/profiles';

import style from './Main.module.css';

export default function Main() {
  const dispatch = useDispatch();
  const kittens = useSelector((state) => state.kittens);
  useEffect(() => dispatch(appAC.loadKittens()), [dispatch]);

  return (
    <div className={style.mainPageWrapper}>
      <div className={style.header}></div>
      {kittens.map((kitten) => (
        <div
          className={style.kittenImageWrapper}
          key={Math.random() * Math.random()}
        >
          <img
            src={kitten.url}
            className={style.kittenImage}
            alt='Kitty'
            id={kitten.id}
          ></img>
          <div className={style.checkBoxWrapper}>
            <input type='checkbox' id={kitten.id}></input>
          </div>
        </div>
      ))}
    </div>
  );
}
