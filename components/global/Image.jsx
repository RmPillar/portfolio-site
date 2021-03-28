import React from 'react';

export default function Image({ src, alt, classes }) {
  const imageSrc = require(`../../assets/img/${src}`).default;
  return <img src={imageSrc} alt={alt} className={classes} />;
}
