import {combineReducers} from 'redux'
import { routerReducer } from 'react-router-redux'


const users = (state={
  userList: [],
  isFetching: false
}, action) => {
  switch(action.type){
    case 'REQUEST_USER_LIST':
      return Object.assign({}, state, {isFetching: true})
    case 'SUCCESS_USER_LIST':
      return Object.assign({}, state, {
        isFetching: false,
        userList: action.userList
      })
    default:
      return state
  }
}

const items = (state={
  itemList: [],
  isFetching: false
}, action) => {
  switch(action.type){
    case 'REQUEST_ITEM_LIST':
      return Object.assign({}, state, {isFetching: true})
    case 'SUCCESS_ITEM_LIST':
      return Object.assign({}, state, {
        isFetching: false,
        itemList: action.itemList
      })
    case 'REQUEST_POST_ITEM':
      return Object.assign({}, state, {isFetching: true})
    case 'SUCCESS_POST_ITEM':
      return Object.assign({}, state, {
        isFetching: false,
        itemList: action.itemList
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