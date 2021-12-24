import { PizzasTypes } from './pizzas/types';
import { RecommendationTypes } from './recommendation/types';
import { all, takeLatest } from 'redux-saga/effects';
import { getPoints } from './points/sagas';
import { PointsTypes } from './points/types';
import { getRecommendation } from './recommendation/sagas';
import { getPizzas } from './pizzas/sagas';

export default function* rootSaga(): any {
  return yield all([
    takeLatest(PointsTypes.GET_POINTS_REQUEST, getPoints),
    takeLatest(
      RecommendationTypes.GET_RECOMMENDATION_REQUEST,
      getRecommendation
    ),
    takeLatest(PizzasTypes.GET_PIZZAS_REQUEST, getPizzas),
  ]);
}
