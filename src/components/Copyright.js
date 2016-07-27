import React, { Component, PropTypes } from 'react'

class reactcopyright extends Component {
  copyrightDate () {
    const date = new Date()
    const year = date.getFullYear()
    return year
  }

  render () {
    return (
      <span>© {this.props.fromDate} - {this.copyrightDate()} {this.props.copyrightName} .</span>
    )
  }
}

reactcopyright.defaultProps = {
  fromDate: '1908',
  copyrightName: 'Amce Inc'
}
reactcopyright.propTypes = {
  fromDate: PropTypes.string,
  copyrightName: PropTypes.string
}

export default reactcopyright
