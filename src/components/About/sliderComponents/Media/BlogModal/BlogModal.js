import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { HiX } from 'react-icons/hi';

import Backdrop from '../../../../Shared/Backdrop/Backdrop';
import ModalLinks from './ModalLinks/ModalLinks';
import { aboutIcons } from '../../../../../assets/icons/icons_about';

import './BlogModal.scss';

const Overlay = ({ show, type, data, closeModal, links }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [show]);

  const content = (
    <div className={`modal ${type} ${data.className}-modal`}>
      <div className='btn-close-modal'>
        <button onClick={closeModal}>
          <HiX />
        </button>
      </div>

      <div className={`modal__main`}>
        <div className='modal__main__img-container'>
          <img src={data.img} alt={data.alt} />
        </div>
        <div className='modal__main__text-container'>
          <div className='heading-modal'>
            <h2>{data.name}</h2>
            <ModalLinks data={data} icons={aboutIcons} list={links} />
          </div>
          <ul className='modal-description'>
            {data.description.map((descriptionParagraph, index) => (
              <li
                key={`modal-description-item-${index}`}
                className='modal-description-item'
              >
                {descriptionParagraph}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <footer className={`modal__footer`}></footer>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const BlogModal = (props) => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames='modal'
      >
        <Overlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default BlogModal;
