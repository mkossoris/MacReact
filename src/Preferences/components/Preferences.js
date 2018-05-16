import React, { Component } from 'react';
import PreferencesToolbar from './PreferencesToolbar'
import Draggable from 'react-draggable'
import fire from '../../config/Fire'
import '../css/preferences.css'

class Preferences extends Component {
  constructor(props) {
    super(props);
    this.zIndexIncrease = this.zIndexIncrease.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.changeBackground = this.changeBackground.bind(this);

    this.state = {
      style: {zIndex: '1'},
      backgroundUrl: ''
    }
  }

  zIndexIncrease() {
    var curZ = this.state.style.zIndex;
    curZ = parseInt(curZ) + 5;
    curZ = String(curZ);
    this.setState({style: {zIndex: curZ}});
  }

  logout() {
    fire.auth().signOut();
    window.location.reload(true);
  }
  
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  changeBackground(e) {
    e.preventDefault();
    this.props.backgroundFunction(this.state.backgroundUrl);
  }

  render() {
    return (
      <Draggable handle='.handle'>
        <div className='preferences-window' style={this.props.styles} onClick={this.zIndexIncrease}>
          <PreferencesToolbar onClose={() => this.props.onClose('Preferences')}/>
          <div className='preferences-main'>
            <form className='background-input' onSubmit={this.changeBackground}>
              <label htmlFor='backgroundUrl'>Change Background</label><br/>
              <input type='text'
                id='backgroundUrl'
                name='backgroundUrl'
                value={this.state.backgroundUrl}
                onChange={this.handleChange}
                placeholder='Image URL' />
            </form>
            <button className='preferences-logout' onClick={this.logout}>Logout</button>
          </div>
        </div>
      </Draggable>
    );
  }
}

export default Preferences;
