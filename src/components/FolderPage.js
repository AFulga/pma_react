import React, { Component } from 'react';
import { GoTrashcan } from 'react-icons/go';

class FolderPage extends Component {
  render() {
    const { name } = this.props;
    const Thumbnail = ({ url, name, date, id }) => (
      <div className='img-container'>
        <h6>{name}</h6>

        <img data-toggle='modal' data-target='#myModal' src={url} />
        <div className='caption'>
          <h6 className='row mr-0 ml-0 mt-2 position-relative'>
            <div className='col-10'>Data: {date}</div>
            <button
              title='Delete image'
              data-image-id={id}
              type='button'
              className='btn btn-warning btn-group col-auto position-absolute'
            >
              <GoTrashcan />
            </button>
          </h6>
        </div>
      </div>
    );
    return (
      <div id='pma_container' className='mt-5 ml-auto mr-auto pt-3'>
        <div id='app'>
          <h1 className='title mb-1'>{name}</h1>
          <div className='thumbnails-container'>
            <div
              id='thumbnails'
              className='d-flex flex-row flex-wrap justify-content-around'
            >
              <Thumbnail
                url='https://picsum.photos/200'
                name='Random'
                date='13 sept. 2019'
                id='img1'
              />
              <Thumbnail
                url='https://picsum.photos/200'
                name='Random'
                date='13 sept. 2019'
                id='img2'
              />
              <Thumbnail
                url='https://picsum.photos/200'
                name='Text mai lung sa'
                date='13 sept. 2019'
                id='img1'
              />
              <Thumbnail
                url='https://picsum.photos/200'
                name='Random'
                date='13 sept. 2019'
                id='img3'
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FolderPage;
