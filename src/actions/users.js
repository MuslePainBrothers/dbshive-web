import axios from 'axios'


function requestUserList(){
  return{
    type: 'REQUEST_USER_LIST'
  }
}

function successUserList(json){
  return{
    type: 'SUCCESS_USER_LIST',
    userList: json
  }
}

export const fetchUserList = () => {
  return dispatch => {
    dispatch(requestUserList())
    return axios.get('http://localhost:5000/users', { timeout: 2000 }).then((res)=>{
      dispatch(successUserList(res.data))
    }).catch((res)=>{
      console.log("err", res)
    })
  }
}

