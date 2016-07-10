import React, { Component, PropTypes } from 'react'

class Logo extends Component {
  render () {
    var details = this.props.details
    return (
    <div>
      <h1 className='white'>{details.logo_text}</h1>
      <h2 className='white'>{details.title}</h2>
    </div>
    )
  }
}

Logo.propTypes = {
  details: PropTypes.string,
  logo_text: PropTypes.string,
  title: PropTypes.string
}

export default Logo
