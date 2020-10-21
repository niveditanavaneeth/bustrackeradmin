import React, { Component } from 'react';
import './App.css';
import LoginForm from './admin/Login';
import Welcome from './admin/home';
import axios from 'axios';

class App extends Component {
 
    constructor(props) {
    super(props)
    // the initial application state
    this.state = {
      user: null
    }
   }
  
  // App "actions" (functions that modify state)
  //eventhandling
  signIn(username, password) {
    // This is where you would call Firebase, an API etc...
    // calling setState will re-render the entire app (efficiently!)
    if(username == null || password == null)
    {
      this.setState(
      {
        user: null
      })
    }

    else
    {
      this.setState({
        user: {
          username,
          password,
        }})
      const user = {
      username : username,
      password : password,
      };

      axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(function(error){
        console.log(error);
      });
  }
  console.log(username)
  console.log(password)
  //   document.getElementById("para").innerHTML= username
  }
  
  signOut() {
    // clear out user from state
    this.setState({user: null})
  }
  
  handleSignIn(e) {
    e.preventDefault()
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    if(username === "")
    {
      username = null  
      document.getElementById("para1").innerHTML = "invalid-username re-enter"
    }
    if(password === "")
    {
      password = null
      document.getElementById("para2").innerHTML = "invalid-password re-enter"
  }
    this.signIn(username, password)
  }

  //http
  
  /*handleSubmit = event => {
    event.preventDefault();
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    const user = {
      username : this.state.username,
      password : this.state.password,
    };

    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }*/

  render() {
    // Here we pass relevant state to our child components
    // as props. Note that functions are passed using `bind` to
    // make sure we keep our scope to App
    return (
        <div className="theapp">
        <header className = "head">
        <h1>BUSAPP</h1>
        </header>

        { 
          (this.state.user) ? 
            <Welcome 
             onSignOut={this.signOut.bind(this)} 
            />
          :
            <LoginForm 
              onSignIn={this.signIn.bind(this)}
              click = {this.handleSignIn.bind(this)} 
            />
        }
        <footer className = "foot"/>
      </div>
      
    );
  }
}

export default App;
