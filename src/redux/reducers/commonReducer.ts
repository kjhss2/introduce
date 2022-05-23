import * as ActionTypes from '../ActionTypes';

const initState = {
  // Call API request
  isRequesting: false,
};

type ActionType = {
  type: string,
}

export const commonState = (state = Object.assign({}, initState), action: ActionType) => {
  switch (action.type) {

    case ActionTypes.COMMON__FETCH_REQUEST:
      return { ...state, isRequesting: true };

    case ActionTypes.COMMON__FETCH_REQUEST_COMPLETE:
      return { ...state, isRequesting: false };

    default:
      return state;
  }
};
