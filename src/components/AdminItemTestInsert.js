import React, {Component} from 'react'


class AdminItemTestInsert extends Component {
  render() {
    return (
      <div>
        <h2>ItemEdit</h2>
        <div>
          <form onSubmit={ e => {
            e.preventDefault()
            this.props.actions.fetchPostItem()
          }}>
            <button type="submit" value="post">test INSERT</button>
          </form>
        </div>
      </div>
    )
  }
}

export default AdminItemTestInsert
