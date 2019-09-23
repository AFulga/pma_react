import React, { Component } from 'react';
import { navigate } from '@reach/router';

class Folder extends Component {
  constructor(props) {
    super(props);
  }

  /*handleClick = () => {
    alert('show images');
    const { name } = this.props;
    const collectionName = name.replace(/ /g, '-');
    navigate(`/collections/${collectionName}`);
    this.props.handlePageChange({
      shAddImg: true,
      shAddFolder: true,
      shBackBtn: true
    });
  };*/

  render() {
    const { name, sid } = this.props;
    console.log(name);
    return (
      <div className={`case-study study${sid}`}>
        <div className='case-study__overlay'>
          <h2 className='case-study__title'>{name}</h2>
          <div
            className='case-study__link show-btn'
            data-album-name={name}
            data-album-id={sid}
          >
            Show images xx
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
  }
}

export default Folder;
