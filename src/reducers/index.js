// import { combineReducers } from 'redux';
// import changeColorReducer from './change-color';

// const rootReducer = combineReducers({
//   changeColor: changeColorReducer
// });
export default function rootReducer(state, action) {
  if (!state) {
    return {
      themeColor: 'blue'
    };
  }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor };
    default:
      return state;
  }
}
