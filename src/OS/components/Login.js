import React, { Component } from 'react';
import fire from '../../config/Fire'
import '../css/login.css'

class Login extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);

    this.state = {
      username: '',
      password: '',
      errorMessage: ''
    }
  }

  login(e) {
    this.setState({wrongPass: ''});
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.username, this.state.password).then((u) => {
    }).catch((error) => {
      console.log(error);
      if (error.code == 'auth/user-not-found' || error.code == 'auth/invalid-email') {
        this.setState({errorMessage: 'No Matching User'});
      } else if (error.code == 'auth/wrong-password') {
        this.setState({errorMessage: 'Wrong Password'});
      }
    })
  }

  signup(e) {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.username, this.state.password).then((u) => {
    }).catch((error) => {
      console.log(error);
      if (error.code == 'auth/email-already-in-use') {
        this.setState({errorMessage: 'Email Already Registered'});
      } else if (error.code == 'auth/invalid-email') {
        this.setState({errorMessage: 'Incorrect Email Format'});
      }
    })
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className='login-screen' >
        <form className='login-form' onSubmit={this.login}>
          <h1>Sign In</h1>
          <input className='login-input' onChange={this.handleChange} name='username' value={this.state.username} type='text' placeholder='Email' />
          <br />
          <input className='login-input' onChange={this.handleChange} name='password' value={this.state.password} type='password' placeholder='Password' />
          <h3 className='pass-wrong' style={{visibility: this.state.errorMessage ? 'visible' : 'hidden', display: this.state.errorMessage ? 'block' : 'none'}} >{this.state.errorMessage}</h3>
          <button onClick={this.login} className='login-button' type='submit'>Login</button>
          <button onClick={this.signup} className='login-button' type='submit'>Register</button>
        </form>
      </div>
    );
  }
}

export default Login;
