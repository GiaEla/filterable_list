import {SET_FILTER} from '../actions/index';

const initialState = {
  filterBy: ''
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER:
      return Object.assign({}, state, {
        filterBy: action.by
      });
    default:
      return state;
  }
}