import React, {Component} from 'react'
import PropTypes from 'prop-types'


class AdminItemList extends Component {
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
          <div key={item.id}>
            {item.id}: {item.name}, {item.description}
            <div>
              developer:
              {item.developers.map((user_name, i) => (
                <div key={i}>{user_name},</div>
              ))}
            </div>
            <br />
          </div>
        ))}
      </div>
    )
  }
}

export default AdminItemList
