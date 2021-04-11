import React from 'react';
import { useDispatch } from 'react-redux';
import * as appAC from '../redux/actionCreators/kittens';
import InfiniteScroll from 'react-infinite-scroll-component';

import style from './Main.module.css';
import Loader from './Loader';

export default function Main(props) {
  const { kittens, isLoading } = props;
  const dispatch = useDispatch();

  //Данная функция отвечает за лайк котенка и добавление/удаление его из списка любимых котиков.
  const handleFavorites = (kitten) => {
    dispatch(appAC.changeStatus(kitten.id));
  };

  //Эта функция работает когда нажали на кнопку "загрузить ещё котят"
  const handleMoreKittens = () => {
    dispatch(appAC.loadMoreKittens());
  };

  return (
    <div>
      <div className={style.mainPageWrapper}>
        {isLoading ? (
          <Loader />
        ) : (
          <InfiniteScroll
            className={style.mainPageWrapper}
            dataLength={kittens.length}
            next={handleMoreKittens}
            hasMore={true}
            scrollThreshold={1}
            initialScrollY={0}
          >
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
          </InfiniteScroll>
        )}
      </div>
      <button type='button'>...загружаем ещё котиков...</button>
    </div>
  );
}
