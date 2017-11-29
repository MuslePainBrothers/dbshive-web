import React, {Component} from 'react'
import PropTypes from 'prop-types'


class UserList extends Component{
  static propTypes = {
    actions: PropTypes.object,
  }

  componentDidMount(){
    const {actions} = this.props
    actions.fetchMessages()
  }

  render() {
    return (
      <div>
        <h1>UserList</h1>
        {this.props.users.messages.map(user => (
          <div key={user.id}>{user.id}: {user.name}</div>
        ))}
      </div>
    )
  }
}

export default UserList
