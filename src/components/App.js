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
        <h1>App</h1>
        {children}
      </div>
    )
  }
}

export default App
