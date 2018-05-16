import React, { Component } from 'react';
import NotesToolbar from './NotesToolbar';
import NotesSidebar from './NotesSidebar';
import NotesMain from './NotesMain';
import Draggable from 'react-draggable';
import firebase from 'firebase';
import '../css/notes.css';

class Notes extends Component {
  constructor() {
    super();
    this.zIndexIncrease = this.zIndexIncrease.bind(this);
    this.noteDisplayedChange = this.noteDisplayedChange.bind(this);
    this.noteChange = this.noteChange.bind(this);
    this.saveNote = this.saveNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.createNote = this.createNote.bind(this);

    this.state = {
      style: {zIndex: '1'},
      displayNote: {date: '', content: ''},
      notes: []
    }
  }

  componentWillMount() {
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('/users/' + userId + '/notes').on("value", (snapshot) => {
      var notes = [];
      var displayNote = {date: Date.now(), content: ''};
      snapshot.forEach(childSnapshot => {
        var temp = { ...childSnapshot.val(), key: childSnapshot.key }
        notes.push(temp)
      })
      
      function compare(a,b) {
        if (a.date < b.date)
          return 1;
        if (a.date > b.date)
          return -1;
        return 0;
      }
      
      notes.sort(compare);

      displayNote = notes[0];

      this.setState({notes, displayNote});
    });
  }

  zIndexIncrease() {
    var curZ = this.state.style.zIndex;
    curZ = parseInt(curZ) + 5;
    curZ = String(curZ);
    this.setState({style: {zIndex: curZ}});
  }

  createNote() {
    var userId = firebase.auth().currentUser.uid;
    var noteInfo = firebase.database().ref('users/' + userId + '/notes').push({
      content: '',
      date: Date.now()
    })
  }

  noteChange(e) {
    var curNote = this.state.displayNote;
    curNote[e.target.name] = e.target.value;
    this.setState({ displayNote: curNote });
  }

  saveNote() {
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('users/' + userId + '/notes/' + this.state.displayNote.key).set({
      content: this.state.displayNote.content,
      date: Date.now()
    });
  }

  removeNote() {
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('users/' + userId + '/notes/' + this.state.displayNote.key).remove().then(() => {
      if (this.state.notes.length > 0) {
        this.setState({displayNote: this.state.notes[0]});
        console.log(this.state.notes);
      } else {
        this.setState({displayNote: {date: Date.now(), content: ''}});
      }
    });
  }

  noteDisplayedChange(note) {
    this.setState({displayNote: note[0]});
  }

  render() {
    return (
      <Draggable handle='.handle'>
        <div className='notes-window' style={this.state.styles} onClick={this.zIndexIncrease}>
          <NotesToolbar 
            onClose={() => this.props.onClose('Notes')}
            saveNote={this.saveNote}
            createNote={this.createNote}
            removeNote={this.removeNote}/>
          <div className='notes-main-wrapper'>
            <NotesSidebar noteDisplayedChange={this.noteDisplayedChange}
              notes={this.state.notes}
              displayNote={this.state.displayNote} />
            <NotesMain changeNote={this.noteChange} displayNote={this.state.displayNote} />
          </div>
        </div>
      </Draggable>
    );
  }
}

export default Notes;
