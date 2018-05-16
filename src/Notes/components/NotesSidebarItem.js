import React, { Component } from 'react';
import '../css/notessidebaritem.css'

class NotesSidebarItem extends Component {
  constructor() {
    super();
    this.renderContent = this.renderContent.bind(this);

    this.state = {
    }
  }

  renderContent() {
    var title = this.props.content.split("\n")[0];
    var subtitle = this.props.content.split("\n")[1];
    return [
      <h1 key='1'>{title}</h1>,
      <p key='2'>{subtitle}</p>
    ]
  }

  render() {
    return (
      <div className='notes-sidebar-item'
        style={{backgroundColor: this.props.backgroundColor}}
        onClick={() => this.props.onClick(this.props.itemId)}>
        {this.renderContent()}
      </div>
    );
  }
}

export default NotesSidebarItem;
