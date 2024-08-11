import React from 'react';
import { Column } from '../../../Shared';

import './Abouts.scss';

const Abouts = ({ columnData }) => {
  return (
    <div className='abouts-columns'>
      {columnData.map((about, index) => (
        <Column
          type='about'
          key={`about-column-${index}`}
          img={about.imgUrl}
          title={about.title}
          txt={about.description}
        />
      ))}
    </div>
  );
};

export default Abouts;
