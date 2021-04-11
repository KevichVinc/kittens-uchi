import axios from 'axios';
import * as types from '../actionTypes';
import store from '../store';

// Этот экшн добавляет в store котят из API
export const setKittens = (kittens) => ({
  type: types.SET_KITTENS,
  kittens,
});

// Этот экшн добавляет в store котят из API по нажатию кнопки
export const setMoreKittens = (kittens) => ({
  type: types.SET_MORE_KITTENS,
  kittens,
});

// Этот экшн обновляет список любимых котеек
export const setFavorites = (favorites) => ({
  type: types.SET_FAVORITES,
  favorites,
});

// Этот экшн добавляет котенка в список любимых
export const addToFavorites = (favorite) => ({
  type: types.SET_FAVORITE,
  favorite,
});

// Этот экшн удаляет котенка из списка любимых
export const deleteFromFavorites = (kittenId) => (dispatch) => {
  const favoritesToChange = store
    .getState()
    .favorite.filter((kitten) => kitten.id !== kittenId);
  dispatch(setFavorites(favoritesToChange));
};

// Этот экшн обновляет статус котят (в любимцах они или нет)
export const changeStatus = (kittenId) => (dispatch) => {
  const kittensToChange = store.getState().kittens.map((kitten) => {
    if (kitten.id === kittenId) {
      if (!kitten.status) {
        kitten.status = true;
        dispatch(addToFavorites(kitten));
        return kitten;
      }
      kitten.status = false;
      dispatch(deleteFromFavorites(kittenId));
      return kitten;
    }
    return kitten;
  });
  dispatch(setKittens(kittensToChange));
};

// Этот экшн загружает котят из базы на componentDidMount(), в первый раз
export const loadKittens = (setLoadStatus) => async (dispatch) => {
  try {
    const url = `https://api.thecatapi.com/v1/images/search?limit=15&page=1&order=Desc`;

    axios.defaults.headers.common = {
      'x-api-key': 'b4d1ba36-487f-4a26-bdc3-625c9e2fade2',
    };
    const json = await axios.get(url);
    const kittensWithStatuses = json.data.map((kitten) => {
      return { ...kitten, status: false };
    });
    dispatch(setKittens(kittensWithStatuses));
    setLoadStatus(false);
  } catch {
    throw new Error('Ошибка при загрузке котеек');
  }
};

// Этот экшн загружает дополнительных котят по нажатию кнопки из API
export const loadMoreKittens = (setMoreLoaded) => async (dispatch) => {
  try {
    const url = `https://api.thecatapi.com/v1/images/search?limit=15&page=${
      Math.random() * 10
    }&order=Desc`;

    axios.defaults.headers.common = {
      'x-api-key': 'b4d1ba36-487f-4a26-bdc3-625c9e2fade2',
    };
    const json = await axios.get(url);
    const kittensWithStatuses = json.data.map((kitten) => {
      return { ...kitten, status: false };
    });
    dispatch(setMoreKittens(kittensWithStatuses));
  } catch {
    throw new Error('Ошибка при загрузке котеек');
  }
};
