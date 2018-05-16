import React, { Component } from 'react';
import '../css/dockicon.css'

class DockIcon extends Component {
  constructor(props) {
    super(props);
    this.showBubble = this.showBubble.bind(this);
    this.hideBubble = this.hideBubble.bind(this);
    this.bounce = this.bounce.bind(this);

    this.state = {
      bubbleVisible: 'hidden',
      bounce: ''
    }
  }

  showBubble() {
    this.setState({bubbleVisible: 'visible'});
  }

  hideBubble() {
    this.setState({bubbleVisible: 'hidden'});
  }

  bounce() {
    this.setState({bounce: 'animate'});
    setTimeout(function(){
      this.setState({bounce: ''});
    }.bind(this), 2000);
  }

  render() {
    return (
      <div className={'dock-icon ' + this.state.bounce} onClick={() => this.props.addApplication(this.props.appName)}>
        <div className='icon-bubble' style={{visibility: this.state.bubbleVisible}}>{this.props.appName}</div>
        <div className='arrow-down' style={{visibility: this.state.bubbleVisible}}></div>
        <img className='icon-image'
          src={this.props.imageIcon}
          onMouseOver={this.showBubble}
          onMouseOut={this.hideBubble}
          onClick={this.bounce}></img>
      </div>
    );
  }
}

export default DockIcon;