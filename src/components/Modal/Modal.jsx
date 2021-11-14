import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import Style from './Modal.module.css';
import ReactModal from "react-modal";

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

   render() {
     return (
       <ReactModal
         isOpen={this.props.onClose}
         onRequestClose={this.props.onClose}
         className={Style.Modal}
         overlayClassName={Style.Overlay}
         ariaHideApp={false}
       >
         <div  onClick={this.handleBackdropClick}>
           <div >{this.props.children}</div>
         </div>
       </ReactModal>
     );
  }
}

export default Modal;