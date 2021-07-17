import React from 'react';
import Photo from './photo';

class Single extends React.Component {

  render () {
    // console.log("Single photo page: ", this.props);
    const {match, photos} = this.props;
    const id = match.params.id;
    const photo = photos.find((photo) => photo._id === id)
    // const comments = this.props.comments[id] || [];
    const index = this.props.photos.findIndex((photo) => photo._id === id)
    // console.log(comments);
    if (this.props.loading === true) {
      return (
        <div className="singlePhoto-container">
          <h1 className="kaushan loader">...Loading.</h1>
        </div>
      )
    }
    else if (photo) {
      return (
        <div className="singlePhoto-container">
          <Photo photo={photo} {...this.props} index={index} />
          {/* <Comments startAddingComment={this.props.startAddingComment} id={id} comments={comments}/> */}
        </div>
      );
    }
    else {
      return (
        <div className="singlePhoto-container">
          <h1 className="kaushan loader">... no post found.</h1>
        </div>
      )
    }
  } 
}

export default Single;