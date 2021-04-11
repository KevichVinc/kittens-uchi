import React from 'react';
import { useDispatch } from 'react-redux';
import * as appAC from '../redux/actionCreators/kittens';

import style from './Main.module.css';

export default function Favorite(props) {
  const { favorite } = props;
  const dispatch = useDispatch();

  //Данная функция отвечает за лайк котенка и добавление/удаление его из списка любимых котиков.
  const handleChange = (kittenId) => dispatch(appAC.changeStatus(kittenId));

  return (
    <div className={style.mainPageWrapper}>
      {favorite.map((kitten) => (
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
              id={kitten.id}
              checked={kitten.status}
              onChange={() => handleChange(kitten.id)}
            ></input>
          </div>
        </div>
      ))}
    </div>
  );
}
