import React, { Component } from 'react';
import NotesSidebarItem from './NotesSidebarItem'
import firebase from 'firebase'
import '../css/notesmain.css'

class NotesMain extends Component {
  constructor() {
    super();
    this.renderDate = this.renderDate.bind(this);

    this.state = {
      content: ''
    }
  }

  componentDidMount() {
    this.setState(this.props.displayNote)
  }

  renderDate() {
    var date = new Date(Number(this.props.displayNote.date));
    return date.toDateString() + " " + date.toLocaleTimeString();
  }

  render() {
    return (
      <div className='notes-main' >
        <p className='note-date'>{this.renderDate()}</p>
        <textarea value={this.props.displayNote.content}
          name='content'
          onChange={this.props.changeNote}>
        </textarea>
      </div>
    );
  }
}

export default NotesMain;
