import React from 'react';
import './Media.scss';
import Creator from './Creator';

const Media = ({ mediaData }) => {
  return (
    <div className='slider-component about-media'>
      <h2 className='grad1'>Blogs & Creators I follow:</h2>

      <div className='about-creators'>
        {mediaData.map((item) => (
          <Creator item={item} />
        ))}
      </div>
    </div>
  );
};

export default Media;
