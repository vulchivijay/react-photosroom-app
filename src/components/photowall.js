import React from 'react';

import Photo from './photo';

export default function PhotoWall(props) {
  // console.log("PhotoWall: ", props);

  return (
    <div className="photowall-container">
      {props.photos
        .sort((x, y) => {
          return y.id - x.id
        })
        .map((photo, index) => {
          return <Photo
            key={index}
            photo={photo}
            {...props}
            index={index}
          />;
      })}
    </div>
  );
}