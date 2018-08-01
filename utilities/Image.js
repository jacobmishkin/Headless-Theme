import React from 'react';

const Image = ({image, className, alt}) => (
  <div className={className}>
    <img src={image} alt={alt} />
  </div>
);
export default Image;
