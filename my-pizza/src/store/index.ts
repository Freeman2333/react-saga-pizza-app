import { PizzasState } from './../../../react-pizza-project/src/store/ducks/pizzas/types';
import { createStore, Store, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { PointsState } from './ducks/points/types';
import createRootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';
import { RecommendationState } from './ducks/recommendation/types';
import { Order } from './ducks/order/types';

export interface ApplicationState {
  points: PointsState;
  pizzas: PizzasState;
  recommendations: RecommendationState;
  order: Order;
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [sagaMiddleware];

const store: Store<ApplicationState> = createStore(
  createRootReducer(),
  composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

export default store;
