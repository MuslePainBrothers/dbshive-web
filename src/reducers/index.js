import {combineReducers} from 'redux'
import { routerReducer } from 'react-router-redux'


const initialState = {
  messages: [],
  isFetching: false
}


const users = (state=initialState, action) => {
const items = (state={
  itemList: [],
  isFetching: false
}, action) => {
  switch(action.type){
    case 'FETCH_MESSAGES':
      return Object.assign(
        {},
        state,
        {
          isFetching: true
        }
      )
    case 'FETCH_MESSAGES_SUCCESS':
    case 'REQUEST_ITEM_LIST':
      return Object.assign({}, state, {isFetching: true})
    case 'SUCCESS_ITEM_LIST':
      return Object.assign({}, state, {
        isFetching: false,
        messages: action.messages
        isFetching: false, itemList: action.itemList
      })
    default:
      return state
  }
}

const reducer = combineReducers({
  users, items,
  routing: routerReducer,
})

export default reducer