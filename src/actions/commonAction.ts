import * as ActionTypes from '../redux/ActionTypes';

type Dimension = {
  height: number,
  width: number,
  isMobile: boolean
}

export const setDimension = (dimension: Dimension) => ({
  type: ActionTypes.COMMON__SET_DIMENSION,
  height: dimension.height,
  width: dimension.width,
  isMobile: dimension.isMobile
});

export const onChangeCommonField = (label: string, value: object) => ({
  type: ActionTypes.COMMON__ON_CHANGE_FIELD,
  label,
  value
});
