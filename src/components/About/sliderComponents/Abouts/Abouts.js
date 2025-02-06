import React from 'react';
import { Column } from '../../../Shared';

import './Abouts.scss';

const Abouts = ({ columnData }) => {
  return (
    <div className='abouts-columns about-slide'>
      {columnData.map((about, index) => {
        return (
          <Column
            type='about'
            key={`about-column-${index}`}
            img={about.icon}
            title={about.title}
            txt={about.description}
          />
        );
      })}
    </div>
  );
};

export default Abouts;
