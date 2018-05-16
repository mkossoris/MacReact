import React, { Component } from 'react';
import WindowButtons from '../../OS/components/WindowButtons'
import '../css/notestoolbar.css'

class NotesToolbar extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div className='notes-toolbar handle'>
        <WindowButtons onClose={this.props.onClose}/>
        <button className='note-button' onClick={this.props.createNote}>New</button>
        <button className='note-button' onClick={this.props.saveNote}>Save</button>
        <button className='note-button' onClick={this.props.removeNote}>Delete</button>
      </div>
    );
  }
}

export default NotesToolbar;
