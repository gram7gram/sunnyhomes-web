import {combineReducers} from 'redux';
import * as LoginActions from "../screens/Login/actions";

const isLoadingVisible = (prev = true, action) => {
  switch (action.type) {
    case LoginActions.LOGIN_CHECK_BEFORE:
      return true
    case LoginActions.LOGIN_CHECK_SUCCESS:
    case LoginActions.LOGIN_CHECK_FAILURE:
      return false
    default:
      return prev
  }
}

const isAuthenticated = (prev = false, action) => {
  switch (action.type) {
    case LoginActions.LOGIN_SUCCESS:
    case LoginActions.LOGIN_CHECK_SUCCESS:
      return true
    case LoginActions.LOGOUT:
    case LoginActions.LOGIN_FAILURE:
    case LoginActions.LOGIN_BEFORE:
    case LoginActions.LOGIN_CHECK_BEFORE:
    case LoginActions.LOGIN_CHECK_FAILURE:
      return false
    default:
      return prev
  }
}

const token = (prev = null, action) => {
  switch (action.type) {
    case LoginActions.LOGIN_SUCCESS:
    case LoginActions.LOGIN_CHECK_SUCCESS:
      if (action.payload.token !== undefined) {
        return action.payload.token
      }

      return prev
    case LoginActions.LOGOUT:
    case LoginActions.LOGIN_FAILURE:
    case LoginActions.LOGIN_CHECK_FAILURE:
      return null
    default:
      return prev
  }
}

const user = (prev = null, action) => {
  switch (action.type) {
    case LoginActions.LOGIN_SUCCESS:
    case LoginActions.LOGIN_CHECK_SUCCESS:
      if (action.payload.user !== undefined) {
        return action.payload.user
      }

      return prev
    case LoginActions.LOGOUT:
    case LoginActions.LOGIN_FAILURE:
    case LoginActions.LOGIN_CHECK_FAILURE:
      return null
    default:
      return prev
  }
}

export default combineReducers({
  isLoadingVisible,
  isAuthenticated,
  token,
  user,
});
