import React, { Component } from 'react';
import { navigate } from '@reach/router';

class Collections extends Component {
  handleClick = e => {
    const name = e.target.dataset.albumName;
    const collectionName = name.replace(/ /g, '-');
    navigate(`/collections/${collectionName}`);
    this.props.handlePageChange({
      shAddImg: true,
      shBackBtn: true,
      shAddFolder: false
    });
  };
  render() {
    const Folder = ({ name, sid }) => (
      <div className={`case-study study${sid}`}>
        <div className='case-study__overlay'>
          <h2 className='case-study__title'>{name}</h2>
          <div
            className='case-study__link show-btn'
            data-album-name={name}
            data-album-id={sid}
            onClick={this.handleClick}
          >
            Show images
          </div>
          <button
            data-album-id={sid}
            type='button'
            className='case-study__link btn btn-warning delete-btn'
          >
            Delete Folder
          </button>
        </div>
      </div>
    );
    return (
      <div id='pma_container' className='mt-5 ml-auto mr-auto w-100 pt-3'>
        <div className='m-auto case-study-gallery'>
          <h1 className='title'>Collections</h1>
          <div className='albums-container'>
            <Folder sid='1' name='mare' />
            <Folder sid='2' name='munte 2019' />
          </div>
        </div>
      </div>
    );
  }
}

export default Collections;
