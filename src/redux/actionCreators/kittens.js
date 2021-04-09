import axios from 'axios';
import * as types from '../actionTypes';
import store from '../store';

export const setKittens = (kittens) => ({
  type: types.SET_KITTENS,
  kittens,
});
export const setFavorites = (favorites) => ({
  type: types.SET_FAVORITES,
  favorites,
});

export const addToFavorites = (favorite) => ({
  type: types.SET_FAVORITE,
  favorite,
});

export const deleteFromFavorites = (kittenId) => (dispatch) => {
  const favoritesToChange = store
    .getState()
    .favorite.filter((kitten) => kitten.id !== kittenId);
  dispatch(setFavorites(favoritesToChange));
};

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

export const loadKittens = () => async (dispatch) => {
  try {
    const url =
      'https://api.thecatapi.com/v1/images/search?limit=50&order=Desc';

    axios.defaults.headers.common = {
      'x-api-key': 'b4d1ba36-487f-4a26-bdc3-625c9e2fade2',
    };
    const json = await axios.get(url);
    const kittensWithStatuses = json.data.map((kitten) => {
      return { ...kitten, status: false };
    });
    dispatch(setKittens(kittensWithStatuses));
  } catch {
    throw new Error('Ошибка при загрузке профилей');
  }
};
