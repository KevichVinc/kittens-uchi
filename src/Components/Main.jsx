import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as appAC from '../redux/actionCreators/kittens';

import style from './Main.module.css';
import Loader from './Loader';

export default function Main(props) {
  const { kittens, isLoading } = props;
  const dispatch = useDispatch();
  const [isMoreLoading, setMoreLoaded] = useState(false);

  const handleFavorites = (kitten) => {
    dispatch(appAC.changeStatus(kitten.id));
  };

  const handleMoreKittens = () => {
    setMoreLoaded(true);
    dispatch(appAC.loadMoreKittens(setMoreLoaded));
  };

  return (
    <div>
      <div className={style.mainPageWrapper}>
        {isLoading ? (
          <Loader />
        ) : (
          kittens.map((kitten) => (
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
          ))
        )}
      </div>
      {isMoreLoading ? (
        <Loader />
      ) : (
        <button type='button' onClick={handleMoreKittens}>
          ...загружаем ещё котиков...
        </button>
      )}
    </div>
  );
}
