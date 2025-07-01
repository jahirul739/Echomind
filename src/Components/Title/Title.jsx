import React from 'react';
import './Title.css';

const Title = ({ subTitle, title }) => {
  return (
    <div className='title'>
      {subTitle && <p className='subtitle'>{subTitle}</p>}
      {title && <h2>{title}</h2>}
    </div>
  );
};

export default Title;
