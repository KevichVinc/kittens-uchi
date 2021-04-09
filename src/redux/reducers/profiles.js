import * as types from '../actionTypes';

const initialState = {
  kittens: [],
  profile: {
    firstName: '',
  },
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_KITTENS:
      return {
        ...state,
        kittens: action.kittens,
      };
    case types.SET_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    default:
      return state;
  }
}
