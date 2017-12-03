import axios from 'axios'


function requestItemList(){
  return{
    type: 'REQUEST_ITEM_LIST'
  }
}

function successItemList(json){
  return{
    type: 'SUCCESS_ITEM_LIST',
    itemList: json
  }
}

export const fetchItemList = () => {
  return dispatch => {
    dispatch(requestItemList())
    return axios.get('http://localhost:5000/items', { timeout: 2000 }).then(res=>{
      dispatch(successItemList(res.data))
    }).catch(res=>{
      console.log("err", res)
    })
  }
}

function requestPostItem(){
  return{
    type: 'REQUEST_POST_ITEM'
  }
}

function successPostItem(json){
  return{
    type: 'SUCCESS_POST_ITEM',
    itemList: json
  }
}

export const fetchPostItem = () => {
  return dispatch => {
    dispatch(requestPostItem())
    return axios.post('http://localhost:5000/items', {
      name: "test",
      description: "test_description",
      developers: [1, 2],
    }).then(res => {
      dispatch(successPostItem(res.data))
    }).catch(res => {
      console.log("err", res)
    })
  }
}


