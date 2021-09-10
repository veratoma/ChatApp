import {CHANGE_POST_LOADING, CHANGE_POST_ERROR, CHANGE_POST_DATA} from "./actions";

const initialState = {
  isLoading: false,
  error: null,
  posts: null
}

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_POST_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      }
    }
    case CHANGE_POST_ERROR: {
      return {
        ...state,
        error: action.payload,
      }
    }
    case CHANGE_POST_DATA: {
        console.log(action)
      return {
        ...state,
        posts: action.payload,
      }
    }
    default: {
      return state;
    }
  }
}