import {combineReducers} from 'redux'
import * as Action from '../actions'
import moment from 'moment'
import i18n from '../../../i18n'

const events = (prev = [], action) => {
  switch (action.type) {
    case Action.FETCH_FAILURE:
      return []
    case Action.FETCH_SUCCESS:
      return action.payload.bookings.map(item => {

        let title
        if (!item.id) {
          title = item['guest-name'] || item.notice || item.type
        } else {
          title = i18n.t('calendar.blockedPlaceholder')
        }

        return {
          title,
          start: moment(item.arrival, 'YYYY-MM-DD'),
          end: moment(item.departure, 'YYYY-MM-DD').add(1, 'day'), //calendar does not display last day!
          allDay: true,
          resource: item
        }
      })
    default:
      return prev
  }
}

const isLoading = (prev = false, action) => {
  switch (action.type) {
    case Action.FETCH_FAILURE:
    case Action.FETCH_SUCCESS:
    case Action.SAVE_SUCCESS:
    case Action.SAVE_FAILURE:
      return false
    case Action.FETCH_BEFORE:
    case Action.SAVE_BEFORE:
      return true
    default:
      return prev
  }
}

export default combineReducers({
  isLoading,
  events,
})

