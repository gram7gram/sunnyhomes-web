import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'

import App from './App';
import Login from '../screens/Login/reducers';
import Profile from '../screens/Profile/reducers';
import Calendar from '../screens/Calendar/reducers';
import Booking from '../screens/Booking/reducers';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  App,
  Login,
  Profile,
  Calendar,
  Booking,
});

export default createRootReducer