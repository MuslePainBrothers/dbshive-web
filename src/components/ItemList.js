import React, {Component} from 'react'
import PropTypes from 'prop-types'


class ItemList extends Component{
  static propTypes = {
    actions: PropTypes.object,
  }

  componentDidMount(){
    const {actions} = this.props
    actions.fetchItemList()
  }

  render() {
    return (
      <div>
        <h2>ItemList</h2>
        {this.props.items.itemList.map(item => (
          <div key={item.id}>{item.id}: {item.name}, {item.description}</div>
        ))}
      </div>
    )
  }
}

export default ItemList
