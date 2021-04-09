import * as types from '../actionTypes';

const initialState = {
  kittens: [],
  favorite: [],
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_KITTENS:
      return {
        ...state,
        kittens: action.kittens,
      };
    case types.SET_FAVORITES:
      return {
        ...state,
        favorite: action.favorites,
      };
    case types.SET_FAVORITE:
      return {
        ...state,
        favorite: [...state.favorite, action.favorite],
      };
    default:
      return state;
  }
}
