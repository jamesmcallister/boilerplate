import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import Logo from './Logo'

class Header extends Component {
  render () {
    return (
      <div className='bg-black-80 w-100 ph3 pv3 pv4-ns ph4-m ph5-l'>
        <nav className='f6 fw6 ttu tracked'>
          <Link className='link dim white dib mr3' to='/'> Home
          </Link>
          <Link className='link dim white dib mr3' to='/about'> About
          </Link>
          <Link className='link dim white dib mr3' to='/contact'> Contact
          </Link>
        </nav>
        <Logo {...this.props} />
      </div>

    )
  }
}

Header.propTypes = {
  details: PropTypes.string
}

export default Header
