import React, { Component } from 'react';
import Login from './Login'
import Dock from './Dock'
import Notes from '../../Notes/components/Notes'
import Preferences from '../../Preferences/components/Preferences'
import firebase from 'firebase'
import fire from '../../config/Fire'
import '../css/desktop.css'

class Desktop extends Component {
  constructor() {
    super();
    this.addApplication = this.addApplication.bind(this);
    this.removeApplication = this.removeApplication.bind(this);
    this.authListener = this.authListener.bind(this);
    this.changeBackground = this.changeBackground.bind(this);

    this.state = {
      backgroundImage: '',
      user: {},
      activeApplications: []
    }

    this.mappings = {
      'Notes': <Notes onClose={this.removeApplication} key='1' />,
      'Preferences': <Preferences onClose={this.removeApplication} key='2' backgroundFunction={this.changeBackground} />
    }
  }

  componentWillMount() {
    this.authListener();
    this.setState({backgroundImage: 'http://cdn.osxdaily.com/wp-content/uploads/2017/06/macos-high-sierra-default-wallpaper-fall-mountain-scene-1.jpg'});
  }

  componentDidMount() {
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({user});

        var userId = this.state.user.uid;

        firebase.database().ref('/users/' + userId + '/general').on("value", (snapshot) => {
          var backgroundImage = snapshot.child('backgroundImage').val();
          if (backgroundImage)
            this.setState({backgroundImage});
          else
            this.setState({backgroundImage: 'http://cdn.osxdaily.com/wp-content/uploads/2017/06/macos-high-sierra-default-wallpaper-fall-mountain-scene-1.jpg'})
        });
      } else {
        this.setState({user: null})
      }
    })
  }

  removeApplication(appName) {
    var prevApps = this.state.activeApplications.slice(0);
    prevApps = prevApps.filter(app => {
      const oldApp = this.mappings[appName]
      return app != oldApp;
    })
    this.setState({activeApplications: prevApps});
  }

  addApplication(app) {
    setTimeout(function (){
      var prevApps = this.state.activeApplications.slice(0);
      const newApp = this.mappings[app];
      if (!prevApps.includes(newApp)) {
        prevApps.push(newApp);
      }
      this.setState({activeApplications: prevApps});
    }.bind(this), 500);
  }

  changeBackground(url) {
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('/users/' + userId + '/general').set({
      backgroundImage: url
    });
  }

  render() {
    return (
      <div>
        {this.state.user ? null : <Login />}
        <div className="desktop"
          style={{filter: this.state.user ? 'none' : 'blur(20px)',
          backgroundImage: 'url(' + this.state.backgroundImage + ')',
          backgroundSize: '100% auto',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'black'}}
        >
          {this.state.activeApplications}
          <Dock addApplication={this.addApplication}/>
        </div>
        <div className='mobile-only'>
          <h1>Please open on desktop to use.</h1>
        </div>
      </div>
    );
  }
}

export default Desktop;
