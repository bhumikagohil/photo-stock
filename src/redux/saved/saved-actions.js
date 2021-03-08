import * as actionTypes from "./saved-types";

export const saveImage = (imageID) => {
  return {
    type: actionTypes.SAVE_IMAGE,
    payload: {
      id: imageID,
    },
  };
};

export const removeSavedImage = (imageID) => {
  return {
    type: actionTypes.REMOVE_SAVED_IMAGE,
    payload: {
      id: imageID,
    },
  };
};