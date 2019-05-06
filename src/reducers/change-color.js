import { CHANGE_COLOR } from '../actions/index';

export default function (state = false, action) {
  if (!state) {
    return {
      themeColor: 'blue'
    };
  }
  switch (action.type) {
    case CHANGE_COLOR:
      return { ...state, themeColor: action.themeColor };
    default:
      return state;
  }
}
