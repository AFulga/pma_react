import React, { Component } from 'react';
import FormError from './FormError';
import firebase from './Firebase';
import { navigate } from '@reach/router';
import { Link } from '@reach/router';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errorMessage: null
    };
  }

  handleChange = e => {
    const itemValue = e.target.value;
    const itemName = e.target.name;
    this.setState({
      [itemName]: itemValue
    });
  };

  handleSubmit = e => {
    const { username, password } = this.state;
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => {
        this.props.handlePageChange({ shAddFolder: true });
        this.props.logIn();
        navigate('/collections');
      })
      .catch(error => {
        this.setState({
          errorMessage: error.message || null
        });
      });
  };

  render() {
    const { username, password, errorMessage } = this.state;
    return (
      <div className='login-container mt-5 pt-3'>
        <div className='row mr-0 ml-0'>
          <div className='col-8 col-md-5 col-lg-4 col-xl-2 login-form-1'>
            <form autoComplete='off' onSubmit={this.handleSubmit}>
              <h3 className='yellow2'>Login</h3>
              {errorMessage ? <FormError theMessage={errorMessage} /> : null}
              <div className='form-group'>
                <input
                  type='email'
                  name='username'
                  className='form-control col-form-label-sm pr-0'
                  placeholder='Username *'
                  value={username}
                  onChange={this.handleChange}
                  autoComplete='new-password'
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  name='password'
                  className='form-control col-form-label-sm pr-0'
                  placeholder='Password *'
                  value={password}
                  onChange={this.handleChange}
                  autoComplete='new-password'
                />
              </div>
              <div className='form-group'>
                <input type='submit' className='btnSubmitLogin' value='Login' />
              </div>
              <div className='form-group'>
                <Link to='/register' className='btnRegister'>
                  Register here
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LogIn;
