import * as actionTypes from "./saved-types";

const INITIAL_STATE = {
  savedImages: [],
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SAVE_IMAGE:
      let index = state.savedImages.findIndex((el) => el == action.payload.id);
      if (index == -1)
        return {
          ...state,
          savedImages: [...state.savedImages, action.payload.id],
        };
      return state;
    case actionTypes.REMOVE_SAVED_IMAGE:
      return {
        ...state,
        savedImages: state.savedImages.filter(
          (item) => item !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default shopReducer;
