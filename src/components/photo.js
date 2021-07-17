import React from 'react';
import {Link} from 'react-router-dom';

export default function Photo (props) {
    const photo = props.photo;
    return (
      <figure className="photo-card">
        <Link to={`/single/${photo._id}`}>
          <img src={process.env.PUBLIC_URL + photo.imagePath} alt={photo.description} />
        </Link>
        <div className="btn-controllers">
          <Link className="comments-count" to={`/single/${photo._id}`}>
            <i className="fas fa-comment"></i>
            <span>
              {props.comments[photo._id] ? props.comments[photo._id].length : 0}
            </span>
          </Link>
          <button className="btn-delete" onClick={() => {
              props.removeAddedPhoto(props.index, photo.id)
              props.history.push("/")
          }}>
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
        <figcaption>{photo.description}</figcaption>
      </figure>
    );
}