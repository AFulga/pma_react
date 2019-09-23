import React, { Component } from 'react';
import { Router, navigate } from '@reach/router';
import LogIn from './components/LogIn';

import './App.css';
import Collections from './components/Collections';
import Navigation from './components/Navigation';
import Folder from './components/Folder';
import FolderPage from './components/FolderPage';
import Footer from './components/Footer';
import Register from './components/Register';
import firebase from 'firebase';

class App extends Component {
  constructor() {
    super();
    this.state = {
      shAddImg: false,
      shAddFolder: false,
      shBackBtn: false,
      user: null,
      displayName: null,
      userID: null
    };
  }

  handlePageChange = ob => {
    this.setState(ob);
  };

  registerUser = userName => {
    firebase.auth().onAuthStateChanged(FBUser => {
      FBUser.updateProfile({
        displayName: userName
      }).then(() => {
        this.setState({
          user: FBUser,
          displayName: FBUser.displayName,
          userID: FBUser.uid
        });
        navigate('/collections');
      });
    });
  };

  logIn = () => {
    firebase.auth().onAuthStateChanged(FBUser => {
      if (FBUser) {
        console.log(FBUser);
        this.setState({
          user: FBUser,
          userID: FBUser.uid,
          displayName: FBUser.displayName
        });
      }
    });
  };

  render() {
    const { shAddImg, shAddFolder, shBackBtn, displayName } = this.state;
    return (
      <>
        <Navigation
          shAddImg={shAddImg}
          shAddFolder={shAddFolder}
          shBackBtn={shBackBtn}
          handlePageChange={this.handlePageChange}
          displayName={displayName}
        />

        {/*<FolderPage name="poze"/>*/}
        {/*<Collections />*/}
        {/*<LogIn />*/}

        <Router>
          <LogIn
            path='/'
            handlePageChange={this.handlePageChange}
            logIn={this.logIn}
          />
          <Register
            path='/register'
            handlePageChange={this.handlePageChange}
            registerUser={this.registerUser}
          />
          <Collections
            path='/collections'
            handlePageChange={this.handlePageChange}
          />
          <FolderPage path='/collections/:collectionName' name='poze' />
        </Router>

        <Footer />
      </>
    );
  }
}

export default App;
