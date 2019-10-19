import request from 'axios'
import parameters from '../../../parameters'
import {SAVE_BEFORE, SAVE_FAILURE, SAVE_SUCCESS} from '../actions'

const parseBeforeSubmit = model => {
  const data = {...model}

  delete data.id

  return data
}

export default (model) => (dispatch, getState) => {

  const token = getState().App.token

  const data = parseBeforeSubmit(model)

  dispatch({
    type: SAVE_BEFORE
  })

  request.post(parameters.apiHost + '/api/v1/profile', data, {
    headers: {
      Authorization: token
    }
  })
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
