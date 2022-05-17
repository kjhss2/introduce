import { combineReducers } from 'redux';

// Import
import * as ActionTypes from '../ActionTypes';
import { IS_MOBILE_WIDTH } from '../../config';

// reducers
import { commonState } from './commonReducer';

// dimension
const dimension = (state = { height: window.innerHeight, width: window.innerWidth, isMobile: window.innerWidth < IS_MOBILE_WIDTH }, action) => {
  if (action.type === ActionTypes.COMMON__SET_DIMENSION) {
    return { height: action.height, width: action.width, isMobile: action.isMobile };
  }
  return state;
};

const rootReducer = combineReducers({
  commonState,
  // browser width, height
  dimension,
});

export default rootReducer;