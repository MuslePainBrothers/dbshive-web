import React, {Component} from 'react'
import PropTypes from 'prop-types'


class App extends Component{
  static propTypes = {
    children: PropTypes.element.isRequired
  };


  render() {
    console.log(this.props)

    const {children} = this.props
    return (
      <div>
        <h3>Header</h3>
        <hr />

        {children}

        <hr />
        <h3>Footer</h3>
        <hr />
      </div>
    )
  }
}

export default App
