import { call, put } from 'redux-saga/effects';

import { loadPointsFailure, loadingPointsSuccess } from './action';

import PointsService from '../../../services/points-service';
import { PointsState } from './types';

export function* getPoints() {
  try {
    const response: PointsState = yield call(PointsService.getPoints);
    yield put(loadingPointsSuccess(response));
  } catch (err) {
    console.log(err);
    yield put(loadPointsFailure());
  }
}
