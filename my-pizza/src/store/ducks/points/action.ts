import { action } from 'typesafe-actions';
import { PointsTypes, PointsState } from './types';

export const loadingPointsRequest = () =>
  action(PointsTypes.GET_POINTS_REQUEST);
export const loadingPointsSuccess = (total: PointsState) =>
  action(PointsTypes.GET_POINTS_SUCCESS, total);
export const loadPointsFailure = () => action(PointsTypes.GET_POINTS_FAILURE);

export const savePoints = (total: number) =>
  action(PointsTypes.SAVE_POINTS, total);
