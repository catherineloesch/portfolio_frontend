import React, { useState } from 'react';
import './Media.scss';
import Creator from './Creator';
import BlogModal from './BlogModal';

const Media = ({ mediaData }) => {
  const [showBlogPortal, setShowBlogPortal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const closeBlogPortal = () => {
    setShowBlogPortal(false);
  };

  const openBlogPortal = (content) => {
    setModalContent(content);
    setShowBlogPortal(true);
  };

  return (
    <div className='slider-component about-media'>
      <h2 className='grad1'>Blogs & Creators I follow:</h2>

      <div className='about-creators'>
        {mediaData.map((blog) => (
          <Creator
            key={`about-creator-${blog.className}`}
            blog={blog}
            onClick={() => openBlogPortal(blog)}
          />
        ))}
      </div>
      <BlogModal
        type='blog-modal'
        data={modalContent}
        show={showBlogPortal}
        onCancel={closeBlogPortal}
        closeModal={closeBlogPortal}
      />
    </div>
  );
};

export default Media;
