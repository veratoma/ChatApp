export const ADD_COLLECTION = 'ADD_COLLECTION';

export const REMOVE_COLLECTION = 'REMOVE_COLLECTION';


export const createAddCollection = (message) => ({
  type: ADD_COLLECTION,
  payload: message,
})


export const addMessageWithThunk = ( message) => (dispatch, getState) => {
  dispatch(createAddCollection( message));
  if (message.author !== "BOT") {
     const botMessage = {
      author: "BOT",
      text: "Cообщение принято!"
     }
     
     setTimeout(() => dispatch(createAddCollection( botMessage)), 2000);
  }
};


// useEffect(() => {
//   const lastMessage = messages[messages.length - 1]
//   if (lastMessage && lastMessage.author !== "Bot") {
//     const botMessage = {
//       author: "Bot",
//       text: "Cообщение принято!"
//     }
//     setMessages([...messages, botMessage])
//   }
// }, [messages]);