import {combineReducers} from 'redux'


const initialState = {
  messages: [],
  isFetching: false
}


const users = (state=initialState, action) => {
  switch(action.type){
    case 'FETCH_MESSAGES':
      console.log("FETCH_MESSAGES")
      return Object.assign(
        {},
        state,
        {
          isFetching: true
        }
      )
    case 'FETCH_MESSAGES_SUCCESS':
      return Object.assign({}, state, {
        isFetching: false,
        messages: action.messages
      })
    default:
      return state
  }
}

const reducer = combineReducers({
  users
})

export default reducer