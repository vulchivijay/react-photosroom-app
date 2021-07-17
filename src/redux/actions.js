// import {database} from './../database/config'
import axios from 'axios';

export function uploadPhoto(photo) {
  return (dispatch) => {
    return axios.post("http://localhost:4000/api/addphoto", photo, {}).then((snapShot) => {
      const result = snapShot.data.photoCreated
      const Photo = {
        _id: result._id,
        imagePath: result.imagePath,
        description: result.description
      }
      dispatch(addPhoto(Photo))
    }).catch(error => {
      console.log(error);
    });
  }
}

export function addPhoto(photo) {
  return {
    type: "ADD_PHOTO",
    photo: photo
  }
}

export function getPhotos(photo) {
  return (dispatch) => {
    return axios.get("http://localhost:4000/api/", {}).then(snapShot => {
      if (snapShot.status === 200) {
        let Photos = [];
        snapShot.data.photos.forEach((childrenSnapShot) => {
          Photos.push(childrenSnapShot)
        });
        // console.log("Photos: ", Photos);
        dispatch(loadPhotos(Photos))
      }
    }).catch(error => {
      console.log(error);
    });
  }
}

export function loadPhotos(photos) {
  return {
    type: "LOAD_PHOTOS",
    photos: photos
  }
}