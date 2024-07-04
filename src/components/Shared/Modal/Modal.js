import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import { colors } from "../../../assets/colors/colors";
import { AiFillGithub } from "react-icons/ai";
import { HiX, HiLink } from "react-icons/hi";
import { workIcons } from "../../../assets/icons/icons_work";

import Backdrop from "../Backdrop/Backdrop";
import "./Modal.scss";
import Carousel from "../Carousel/Carousel";

const Overlay = ({ show, type, data, closeModal }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  const content = (
    <div className={`modal ${type}`}>
      <div className="btn-close-modal">
        <button onClick={closeModal}>
          <HiX />
        </button>
      </div>

      <div className={`modal__main`}>
        <div className="modal__main__img-container">
          <Carousel imgData={data.imgArr} type="project" />
        </div>
        <div className="modal__main__text-container">
          <div className="heading-modal">
            <h2>{data.title}</h2>
            <div className="modal-links">
              <a href={data.codeLink} target="_blank" rel="noreferrer">
                <div className="modal-link">{workIcons.gitHub}</div>
              </a>
              <a href={data.projectLink} target="_blank" rel="noreferrer">
                <div className="modal-link">{workIcons.link}</div>
              </a>
            </div>
          </div>

          <p>{data.description}</p>
        </div>
      </div>

      <footer className={`modal__footer`}>
        <div className="modal-skills-list flex">
          {data.skills.map((skill) => (
            <div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="modal-skills-item flex"
              id={skill.id}
              key={`skill-${skill.name}`}
            >
              <div className="flex" style={{ backgroundColor: colors.skillBg }}>
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <Overlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
