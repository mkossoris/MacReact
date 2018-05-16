import React, { Component } from 'react';
import '../css/windowbuttons.css'

class WindowButtons extends Component {
  constructor() {
    super();
    this.displayX = this.displayX.bind(this);
    this.removeX = this.removeX.bind(this);

    this.state = {
      x: '',
      dash: '',
      expand: ''
    }
  }

  displayX() {
    this.setState({x: 'x', dash: '–', expand: '^'})
  }

  removeX() {
    this.setState({x: '', dash: '', expand: ''})
  }

  render() {
    return (
      <div className='window-buttons' onMouseOver={this.displayX} onMouseOut={this.removeX}>
        <div className='red window-button' onClick={this.props.onClose}>{this.state.x}</div>
        <div className='yellow window-button' onClick={this.props.onMinimize}>{this.state.dash}</div>
        <div className='green window-button' onClick={this.props.onExpand}>{this.state.expand}</div>
      </div>
    );
  }
}

export default WindowButtons;
