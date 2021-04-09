import React from 'react';
import { useDispatch } from 'react-redux';
import * as appAC from '../redux/actionCreators/kittens';

import style from './Main.module.css';

export default function Main(props) {
  const { kittens } = props;
  const dispatch = useDispatch();

  const handleFavorites = (kitten) => {
    dispatch(appAC.changeStatus(kitten.id));
  };

  return (
    <div className={style.mainPageWrapper}>
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
            <input
              type='checkbox'
              checked={kitten.status}
              id={kitten.id}
              onChange={() => handleFavorites(kitten)}
            ></input>
          </div>
        </div>
      ))}
    </div>
  );
}
