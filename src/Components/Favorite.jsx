import React from 'react';

import style from './Main.module.css';

export default function Favorite(props) {
  const { favorite } = props;

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
              cheked={kitten.status}
              type='checkbox'
              id={kitten.id}
            ></input>
          </div>
        </div>
      ))}
    </div>
  );
}
