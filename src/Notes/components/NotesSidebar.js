import React, { Component } from 'react';
import NotesSidebarItem from './NotesSidebarItem'
import firebase from 'firebase'
import '../css/notessidebar.css'

class NotesSidebar extends Component {
  constructor(props) {
    super(props);
    this.itemOnClick = this.itemOnClick.bind(this);

    this.state = {
      activeNote: 0,
      notes: []
    }
  }

  itemOnClick(key) {
    this.setState({activeNote: key});
    var retNote = this.props.notes.filter(note => {
      return note.key == key;
    })
    this.props.noteDisplayedChange(retNote);
  }

  render() {
    return (
      <div className='notes-sidebar' >
        {this.props.notes.map((note) => {
          if (this.props.displayNote.key === note.key) {
            return(
              <NotesSidebarItem
                title={note.title}
                content={note.content}
                backgroundColor='#ECD128'
                onClick={this.itemOnClick}
                itemId={note.key}/>
            )
          } else {
            return(
              <NotesSidebarItem
                title={note.title}
                content={note.content}
                backgroundColor=''
                onClick={this.itemOnClick}
                itemId={note.key} />
            )
          }
        })}
      </div>
    );
  }
}

export default NotesSidebar;
