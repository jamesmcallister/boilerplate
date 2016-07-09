import React, { Component } from 'react';
import fileurl from '../readme.md'

export default class Markdown extends Component {
  rawMarkup() {
    
    return { __html: fileurl };
  }
  render() {
    return (
      <div dangerouslySetInnerHTML={this.rawMarkup() } />
    );
  }
}

