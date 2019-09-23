import React, { Component } from 'react';
import firebase from './Firebase';
import { navigate } from '@reach/router';
import { Link } from '@reach/router';
import FormError from './FormError';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      username: '',
      password: '',
      password2: '',
      errorMessage: null
    };
  }
  handleChange = e => {
    const itemValue = e.target.value;
    const itemName = e.target.name;

    this.setState(
      {
        [itemName]: itemValue
      },
      () => {
        const error =
          this.state.password !== this.state.password2
            ? 'Passwords do not match.'
            : null;
        this.setState({ errorMessage: error });
      }
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password, password2, displayName } = this.state;

    if (password !== password2) {
      this.setState({
        errorMessage: 'The passwords do not match'
      });
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(username, password)
        .then(() => {
          this.props.handlePageChange({ shAddFolder: true });
          this.props.registerUser(displayName);
          navigate('/collections');
        })
        .catch(error => {
          this.setState({
            errorMessage: error.message || null
          });
        });
    }
  };

  render() {
    const {
      displayName,
      username,
      password,
      password2,
      errorMessage
    } = this.state;

    const { handlePageChange } = this.props;
    return (
      <div className='login-container mt-5 pt-3'>
        <div className='row mr-0 ml-0'>
          <div className='col-8 col-md-5 col-lg-4 col-xl-2 login-form-1'>
            <form onSubmit={this.handleSubmit} autoComplete='new-password'>
              <h3 className='yellow2'>Registration</h3>
              <div className='form-row'>
                {errorMessage ? <FormError theMessage={errorMessage} /> : null}
              </div>
              <div className='form-group'>
                <input
                  className='form-control col-form-label-sm pr-0'
                  type='text'
                  id='displayName'
                  placeholder='Display Name'
                  name='displayName'
                  required
                  value={displayName}
                  onChange={this.handleChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='email'
                  name='username'
                  className='form-control col-form-label-sm pr-0'
                  placeholder='Username *'
                  onChange={this.handleChange}
                  value={username}
                  autoComplete='new-password'
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  name='password'
                  className='form-control col-form-label-sm pr-0'
                  placeholder='Password *'
                  onChange={this.handleChange}
                  value={password}
                  autoComplete='new-password'
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  name='password2'
                  className='form-control col-form-label-sm pr-0'
                  placeholder='Confirm Password *'
                  onChange={this.handleChange}
                  value={password2}
                  autoComplete='new-password'
                />
              </div>
              <div className='form-group'>
                <input
                  type='submit'
                  className='btnSubmitRegister'
                  value='Register'
                />
              </div>
              <div className='form-group'>
                <Link to='/' className='btnRegister'>
                  Log in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
