import React from 'react'
import { createPortal } from 'react-dom';
import './Modal.css'

const Modal = ({ isShowing, hide, children }) => isShowing ? createPortal(
    <React.Fragment>
      <div className="modal-overlay"/>
      <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div onClick={(e)=>e.stopPropagation()} className="modal">
          <div className="modal-header">
            <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          { children }
        </div>
      </div>
    </React.Fragment>, document.body
  ) : null;

export default Modal