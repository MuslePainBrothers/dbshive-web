import {connect} from 'react-redux'
import * as Actions from '../actions'
import {bindActionCreators} from 'redux'
import ItemEdit from '../components/ItemEdit'


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

const AdminBox = connect(mapStateToProps, mapDispatchToProps)(ItemEdit)

export default AdminBox

