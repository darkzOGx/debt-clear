import React from 'react';

const SmartHeading = ({ level = 2, className = '', children, ...props }) => {
  const HeadingTag = `h${level}`;
  
  return (
    <HeadingTag className={className} {...props}>
      {children}
    </HeadingTag>
  );
};

export default SmartHeading;