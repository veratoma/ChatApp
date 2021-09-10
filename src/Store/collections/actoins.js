export const ADD_COLLECTION = 'ADD_COLLECTION';

export const REMOVE_COLLECTION = 'REMOVE_COLLECTION';


export const createAddCollection = (message) => ({
  type: ADD_COLLECTION,
  payload: message,
})

export const addMessageWithThunk = (message) => (dispatch, getState) => {
  dispatch(createAddCollection(message));
  if (message.author !== "BOT") {
    const botMessage = {
      id: Date.now().toString(),
      chatId: message.chatId,
      author: "BOT",
      text: "Cообщение принято!"
    }
    setTimeout(() => dispatch(createAddCollection(botMessage)), 2000);
  }
};

