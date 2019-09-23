import React, { Component } from 'react';

class Thumbnail extends Component {
  render() {
    const { url, name, date, id } = this.props;
    return (
      <div className='img-container'>
        <img data-toggle='modal' data-target='#myModal' src={url} />
        <div className='caption'>
          <h6>{name}</h6>
          <h6>Data: {date}</h6>
          <button data-image-id={id} type='button' className='btn btn-warning'>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Thumbnail;
