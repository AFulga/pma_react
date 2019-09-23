import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className='bg-dark fixed-bottom'>
        <div className='col-md-4 ml-auto mr-auto'>
          <p className='text-muted m-1 h6'>@Copyright 2019 Fulga Aurelian</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
