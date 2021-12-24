import { combineReducers } from 'redux';
import points from './points';
import recommendations from './recommendation';
import pizzas from './pizzas';
import order from './order';

const createRootReducer = () =>
  combineReducers({
    points,
    recommendations,
    pizzas,
    order,
  });

export default createRootReducer;
