import {all, fork} from 'redux-saga/effects';

import Login from './screens/Login/sagas';
import Profile from './screens/Profile/sagas';
import Owners from './screens/Owners/sagas';
import Admins from './screens/Admins/sagas';

export default function* root() {
  yield all([
    fork(Login),
    fork(Profile),
    fork(Owners),
    fork(Admins),
  ]);
}
