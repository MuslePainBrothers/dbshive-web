import React from 'react'
import {connect} from 'react-redux'
import * as Actions from '../actions'
import {bindActionCreators} from 'redux'
import AdminItemTestInsert from '../components/AdminItemTestInsert'
import AdminItemList from '../components/AdminItemList'



const mapStateToProps = state => {
  return{
    items: state.items
  }
}

const mapDispatchToProps = dispatch => {
  return{
    actions: bindActionCreators(Actions, dispatch)
  }

}


const AdminBox1 = connect(mapStateToProps, mapDispatchToProps)(AdminItemTestInsert)
const AdminBox2 = connect(mapStateToProps, mapDispatchToProps)(AdminItemList)

const AdminBox = () => (
  <div>
     <AdminBox1 />
     <AdminBox2 />
  </div>
)

export default AdminBox


