import axios from 'axios';
import * as types from '../actionTypes';

export const setProfiles = (kittens) => ({
  type: types.SET_KITTENS,
  kittens,
});

export const setProfile = (profile) => ({
  type: types.SET_PROFILE,
  profile,
});

export const loadKittens = () => async (dispatch) => {
  try {
    const url =
      'https://api.thecatapi.com/v1/images/search?limit=50&order=Desc';

    axios.defaults.headers.common = {
      'x-api-key': 'b4d1ba36-487f-4a26-bdc3-625c9e2fade2',
    };
    const json = await axios.get(url);
    dispatch(setProfiles(json.data));
  } catch {
    throw new Error('Ошибка при загрузке профилей');
  }
};
