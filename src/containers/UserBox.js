import {connect} from 'react-redux'
import * as Actions from '../actions'
import {bindActionCreators} from 'redux'
import UserList from '../components/UserList'


const mapStateToProps = state => {
  return{
    users: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return{
    actions: bindActionCreators(Actions, dispatch)
  }

}

const UserBox = connect(mapStateToProps, mapDispatchToProps)(UserList)

export default UserBox