import {connect} from 'react-redux'
import * as Actions from '../actions'
import {bindActionCreators} from 'redux'
import ItemList from '../components/ItemList'


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

const ItemBox = connect(mapStateToProps, mapDispatchToProps)(ItemList)

export default ItemBox
