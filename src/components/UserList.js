import React, {Component} from 'react'
import PropTypes from 'prop-types'


class UserList extends Component{
  static propTypes = {
    actions: PropTypes.object,
  }

  componentDidMount(){
    const {actions} = this.props
    actions.fetchUserList()
  }

  render() {
    return (
      <div>
        <h2>UserList</h2>
        {this.props.users.userList.map(user => (
          <div key={user.id}>{user.id}: {user.name}</div>
        ))}
      </div>
    )
  }
}

export default UserList
