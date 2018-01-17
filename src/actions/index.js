export const SET_FILTER = 'SET_FILTER';

export function setFilter(by) {
  return { type: SET_FILTER, by };
}