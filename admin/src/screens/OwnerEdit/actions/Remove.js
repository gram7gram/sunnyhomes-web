import request from 'axios'
import parameters from '../../../parameters'
import {REMOVE_BEFORE, REMOVE_FAILURE, REMOVE_SUCCESS} from '../actions'

export default id => (dispatch, getState) => {

  const token = getState().App.token

  dispatch({
    type: REMOVE_BEFORE
  })

  request.delete(parameters.apiHost + '/api/v1/owners/' + id, {
    headers: {
      Authorization: token
    }
  }).then(() => {
    dispatch({
      type: REMOVE_SUCCESS,
    })
  }).catch(e => {
    console.log(e);

    if (!e.response) return

    dispatch({
      type: REMOVE_FAILURE,
      payload: {
        status: e.response.status,
        data: e.response.data
      }
    })
  })
}
