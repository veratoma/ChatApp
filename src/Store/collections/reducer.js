import {ADD_COLLECTION} from "./index";


const initialState = {
  messages: [],
}



export const collectionsReducer = (state= initialState, action) => {
  switch (action.type) {
    case ADD_COLLECTION: {
      return  {
        messages: [
          ...state.messages,
          action.payload,
        ],
      }
    }
    
    default: {
      return state;
    }
  }
}