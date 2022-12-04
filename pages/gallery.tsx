import React from 'react';

const Gallery = () => {
  return (
    <div>
      {['1', '2', '3', '4', '5'].map((path: any) => {
        return (
          <div key={path}>
            <img src={`/${path}.jpg`} alt="gallery" width="280" height="420" />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
