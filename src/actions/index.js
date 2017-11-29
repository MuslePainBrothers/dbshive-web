import axios from 'axios'


function requestMessages(){
  return{
    type: 'FETCH_MESSAGES'
  }
}

function receiveMessages(json){
  return{
    type: 'FETCH_MESSAGES_SUCCESS',
    messages: json
  }
}

export const fetchMessages = () => {
  return dispatch => {
    dispatch(requestMessages())
    console.log("requestMessages")
    return axios.get('http://localhost:5000/users').then((res)=>{
      console.log("axios.get")
      dispatch(receiveMessages(res.data))
    }).catch((res)=>{
      console.log("err")
    })
  }
}
