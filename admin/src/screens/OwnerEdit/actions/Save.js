import request from 'axios'
import parameters from '../../../parameters'
import {SAVE_BEFORE, SAVE_FAILURE, SAVE_SUCCESS} from '../actions'

const parseBeforeSubmit = model => {
  const data = {...model}

  delete data.id

  if (data.password1) {
    data.password = data.password1
  }

  delete data.password1
  delete data.password2

  return data
}

export default (model) => (dispatch, getState) => {

  const token = getState().App.token

  const data = parseBeforeSubmit(model)

  dispatch({
    type: SAVE_BEFORE
  })

  let promise
  if (model.id) {
    promise = request.put(parameters.apiHost + '/api/v1/owners/' + model.id, data, {
      headers: {
        Authorization: token
      }
    })
  } else {
    promise = request.post(parameters.apiHost + '/api/v1/owners', data, {
      headers: {
        Authorization: token
      }
    })
  }

  promise
    .then(({data}) => {
      dispatch({
        type: SAVE_SUCCESS,
        payload: data
      })
    })
    .catch(e => {
      console.log(e);

      if (!e.response) return

      dispatch({
        type: SAVE_FAILURE,
        payload: {
          status: e.response.status,
          data: e.response.data
        }
      })
    })
}
