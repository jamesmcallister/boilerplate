import React, { PropTypes, Component } from 'react'
import Header from '../components/Header'
import tachyons from 'tachyons'
import SiteConfig from '../config/SiteConfig'
import Copyright from '../components/Copyright'

class App extends Component {
  render () {
    return (
      <div className='bg-black-10'>
        <Header details={SiteConfig} />
        <div className='vw-100 ph3 pv3 pv4-ns ph4-m'>
          {this.props.children}
        </div>
        <Copyright copyrightName='James McAllister' fromDate='1980' />
      </div>

    )
  }
}
App.propTypes = {
  children: PropTypes.string
}

export default App
