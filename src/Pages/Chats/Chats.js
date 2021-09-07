import { ChatForm } from '../../components/ChatForm/ChatForm';
import { MessageList } from '../../components/MessageList/MessageList';
import React, { useEffect, useState } from 'react';
import { ChatList } from '../../components/ChatList/ChatList'
import { useParams } from "react-router-dom";
import {
  Redirect
} from "react-router-dom";
import { chatsConnect } from '../../connects/chats';
import {addMessageWithThunk} from '../../Store/collections/actoins'
import { dispatch } from 'react';
import { useCallback } from 'react';
import {collectionsConnect} from '../../connects/collections'

export const ChatsRender = function (props) {

  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages([...messages, message])
  }
  // const dispatch = useDispatch();

  const onAddMessage = useCallback((message) => {
    dispatch(addMessageWithThunk( message));
  }, [dispatch]);
  
  console.log(addMessageWithThunk)

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

  const { chatId } = useParams();
  
  if (chatId && !props.chats.some(c => c.id === chatId))
    return <Redirect to="/nochat" />

  return (
    <div className="App-container">
      <ChatList chatitems={props.chats}
        chatId={chatId}
      ></ChatList>
      <div>
        <MessageList messages={messages.filter(msg => msg.chatId === chatId)}> </MessageList>
        <ChatForm onSubmit={addMessage}></ChatForm>
      </div>
    </div>
  )
};

export const Chats = chatsConnect(ChatsRender);
export const Message = collectionsConnect(ChatsRender)