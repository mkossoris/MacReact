import React, { Component } from 'react';
import WindowButtons from '../../OS/components/WindowButtons'
import '../css/preferencestoolbar.css'

class PreferencesToolbar extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div className='preferences-toolbar handle'>
        <WindowButtons onClose={this.props.onClose}/>
      </div>
    );
  }
}

export default PreferencesToolbar;
