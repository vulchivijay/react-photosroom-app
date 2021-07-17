import { combineReducers } from 'redux';

const comments = function(state={}, action) {
  // console.log("Comment reducer");
  switch (action.type) {
    case "LOAD_COMMENTS":
      return action.comments
    case "ADD_COMMENT":
      if (!state[action.postid])
        return {...state, [action.postid]: [action.comment] }
      else
        return {...state, [action.postid]: [...state[action.postid], action.comment] }
    default: return state;
  }
}

const photos = function (state = [], action) {
  // console.log("Post reducer");
  switch(action.type) {
    // case "REMOVE_PHOTO": return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
    case "ADD_PHOTO": return [...state, action.photo]
    case "LOAD_PHOTOS": return action.photos
    default: return state;
  }
}

const rootReducers = combineReducers({photos, comments})

export default rootReducers;