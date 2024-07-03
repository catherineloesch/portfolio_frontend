import React, { useState, useEffect, useRef, useContext } from "react";
import { motion } from "framer-motion";

import { CurrentContext } from "../../contexts/CurrentContext";
import { AppContainer, MotionContainer } from "../../containers";
import WorkModal from "./WorkModal";
import { BsEyeFill } from "react-icons/bs";
import { projects } from "./../../api_data/api_projects";
import { colors } from "../../assets/colors/colors";
import "./Work.scss";
import { BtnFill, Modal, SectionHeading } from "../Shared";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterWork, setFilterWork] = useState(projects);

  const [showProjectModal, setShowProjectModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const closeProjectModal = () => {
    setShowProjectModal(false);
  };

  const openProjectModal = (content) => {
    setModalContent(content);
    setShowProjectModal(true);
  };

  const categories = [
    "All",
    "React",
    "MERN",
    "Rails",
    "Full-Stack",
    "Responsive Design",
  ];
  const active = useContext(CurrentContext);

  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef("work");
  const navDots = document.querySelectorAll(".nav-dot");
  const dot = document.querySelector("#work-dot");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );
    if (isIntersecting) {
      active.current = "work";
      navDots.forEach(
        (dot) => (dot.style.backgroundColor = colors.navDotInactive)
      );
      dot.style.backgroundColor = colors.navDotActive;
    }

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isIntersecting, active, dot, navDots]);

  const handleWorkFilter = (category) => {
    setActiveFilter(category);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (category === "All") {
        setFilterWork(projects);
      } else {
        setFilterWork(
          projects.filter((project) => project.tags.includes(category))
        );
      }
    }, 500);
  };

  return (
    <React.Fragment>
      <div className="works nav-section" ref={ref}>
        <SectionHeading section="work">Latest Projects</SectionHeading>

        <div className="work-filter">
          {categories.map((category, index) => (
            <BtnFill
              type="button"
              name={category}
              key={`work-filter-${category}`}
              id={`work-filter-${category}`}
              size="small"
              active={activeFilter}
              classNames="work-filter-item"
              onClick={() => handleWorkFilter(category)}
            >
              {category}
            </BtnFill>
          ))}
        </div>

        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="work-portfolio"
        >
          {filterWork.map((work, index) => (
            <div className="work-item flex" key={index}>
              <div className="work-img flex">
                <img src={work.imgUrl} alt={work.title} />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="work-hover flex"
                >
                  <button
                    onClick={() => openProjectModal(work)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      transition={{ duration: 0.25 }}
                      className="flex"
                    >
                      <BsEyeFill className="work-icon" />
                    </motion.div>
                  </button>
                </motion.div>
              </div>
              <div className="work-content flex">
                <h4 className="bold">{work.title}</h4>
              </div>
            </div>
          ))}
        </motion.div>
        {/*<WorkModal modal={modal} setModal={setModal} />*/}
      </div>
      <Modal
        type="project-modal"
        data={modalContent}
        show={showProjectModal}
        onCancel={closeProjectModal}
        closeModal={closeProjectModal}
      />
    </React.Fragment>
  );
};

export default AppContainer(MotionContainer(Work, "work"), "work", "bg-2");
