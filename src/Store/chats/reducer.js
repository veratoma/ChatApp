import { ADD_CHAT } from "./actoins";

const initialState = {
  chatList: [],
}

export const chatReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_CHAT: {
      return {
        chatList: [
          ...state.chatList,
          action.payload,
        ],
      }
    }
    default: {
      return state;
    }
  }
}