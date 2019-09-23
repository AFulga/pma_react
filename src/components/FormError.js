import React, { Component } from 'react';

class FormError extends Component {
  render() {
    return (
      <div className='col-12 alert alert-danger px-3'>
        {this.props.theMessage}
      </div>
    );
  }
}

export default FormError;
