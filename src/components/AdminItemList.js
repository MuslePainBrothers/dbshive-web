import React, {Component} from 'react'
import { Link } from 'react-router';
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
            {item.id}:
            <Link to={'/admin/detail/' + item.id}>
              {item.name}
              </Link>
          </div>
        ))}
      </div>
    )
  }
}

export default AdminItemList
