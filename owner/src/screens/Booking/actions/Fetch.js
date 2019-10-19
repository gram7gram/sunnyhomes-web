import request from 'axios'
import parameters from '../../../parameters'
import {FETCH_BEFORE, FETCH_FAILURE, FETCH_SUCCESS} from '../actions'

export default (id) => (dispatch, getState) => {

  const token = getState().App.token

  dispatch({
    type: FETCH_BEFORE
  })

  request.get(parameters.apiHost + `/api/v1/booking/${id}`, {
    headers: {
      Authorization: token
    }
  })
    .then(({data}) => {
      dispatch({
        type: FETCH_SUCCESS,
        payload: data
      })
    })
    .catch(e => {

      console.log(e);

      if (!e.response) return

      dispatch({
        type: FETCH_FAILURE,
        payload: {
          status: e.response.status,
          data: e.response.data
        }
      })
    })
}
