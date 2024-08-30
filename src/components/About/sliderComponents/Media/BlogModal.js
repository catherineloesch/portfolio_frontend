import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { HiX } from 'react-icons/hi';

import Backdrop from '../../../Shared/Backdrop/Backdrop';

import './BlogModal.scss';
import { aboutIcons } from '../../../../assets/icons/icons_about';

const Overlay = ({ show, type, data, closeModal }) => {
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
            <div className='modal-links'>
              {data.website && data.website !== '' && (
                <a href={data.website} target='_blank' rel='noreferrer'>
                  <div className='modal-link'>{aboutIcons.website.src}</div>
                </a>
              )}
              {data.blog && data.blog !== '' && (
                <a href={data.blog} target='_blank' rel='noreferrer'>
                  <div className='modal-link'>{aboutIcons.blog.src}</div>
                </a>
              )}
              {data.podcast && data.podcast !== '' && (
                <a href={data.podcast} target='_blank' rel='noreferrer'>
                  <div className='modal-link'>{aboutIcons.podcast.src}</div>
                </a>
              )}
              {data.newsletter && data.newsletter !== '' && (
                <a href={data.newsletter} target='_blank' rel='noreferrer'>
                  <div className='modal-link'>{aboutIcons.newsletter.src}</div>
                </a>
              )}
              {data.forum && data.forum !== '' && (
                <a href={data.forum} target='_blank' rel='noreferrer'>
                  <div className='modal-link'>{aboutIcons.forum.src}</div>
                </a>
              )}
              {data.github && data.github !== '' && (
                <a href={data.github} target='_blank' rel='noreferrer'>
                  <div className='modal-link'>{aboutIcons.github.src}</div>
                </a>
              )}
              {data.youtube && data.youtube !== '' && (
                <a href={data.youtube} target='_blank' rel='noreferrer'>
                  <div className='modal-link'>{aboutIcons.youtube.src}</div>
                </a>
              )}
              {data.mastodon && data.mastodon !== '' && (
                <a href={data.mastodon} target='_blank' rel='noreferrer'>
                  <div className='modal-link'>{aboutIcons.mastodon.src}</div>
                </a>
              )}
              {data.linkedin && data.linkedin !== '' && (
                <a href={data.linkedin} target='_blank' rel='noreferrer'>
                  <div className='modal-link'>{aboutIcons.linkedin.src}</div>
                </a>
              )}
            </div>
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
