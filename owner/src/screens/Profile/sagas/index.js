import {all, fork} from 'redux-saga/effects'

import Validation from './Validation'
import Notification from './Notification'

export default function* sagas() {
    yield all([
        fork(Validation),
        fork(Notification),
    ])
}
