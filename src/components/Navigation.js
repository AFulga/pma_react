import React, { Component } from 'react';
import { Link } from '@reach/router';
import { FaFolderPlus, FaUndo, FaCloudUploadAlt } from 'react-icons/fa';
import { navigate } from '@reach/router';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }
  handleClick = () => {
    navigate(`/collections`);
    this.props.handlePageChange({
      shAddFolder: true,
      shAddImg: false,
      shBackBtn: false
    });
  };
  render() {
    const Button = ({ children, title, outline, click }) => (
      <button
        className={`btn btn-sm ${outline ||
          'btn-outline-warning'} mr-1 p-2 p-sm-2 h-auto mt-auto mb-auto cursor-pointer`}
        title={title}
        onClick={click}
      >
        {children}
      </button>
    );

    const { shAddImg, shAddFolder, shBackBtn, displayName } = this.props;
    return (
      <nav className='site-nav family-sans navbar navbar-expand navbar-dark higher bg-dark fixed-top p-1'>
        <div className='container-fluid col-12'>
          <div className='col-4 m-auto p-0'>
            <Link to='/' className='col-3 col-sm-8 text-right navbar-brand'>
              <img
                src='https://image.flaticon.com/icons/svg/1322/1322620.svg'
                alt=''
              />
              <span className='yellow1'> pma</span>
            </Link>
          </div>
          <div className='col-4 m-auto p-0 white-1 text-center'>
            {displayName ? `Hi, ${displayName}` : displayName}
          </div>

          <div className='m-auto navbar-nav pr-sm-5 text-center col-4'>
            <div className='text-right col-5 col-sm-4 mr-0 pr-0'>
              {shBackBtn ? (
                <Button
                  title='Go back'
                  outline='btn-outline-secondary'
                  click={this.handleClick}
                >
                  <FaUndo />
                </Button>
              ) : null}
            </div>
            <div className='col-2 col-sm-8 text-left'>
              {shAddImg ? (
                <>
                  <input
                    multiple
                    type='file'
                    id='uploadFiles'
                    className='hide'
                  />
                  <label
                    title='Upload image'
                    htmlFor='uploadFiles'
                    className='btn btn-sm btn-outline-warning mr-1 p-2 p-sm-2 h-auto mt-auto mb-auto cursor-pointer'
                  >
                    <FaCloudUploadAlt />
                  </label>
                </>
              ) : null}

              {shAddFolder ? (
                <Button title='Add folder'>
                  <FaFolderPlus />
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
