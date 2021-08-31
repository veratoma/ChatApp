import { ChatForm } from '../../components/ChatForm/ChatForm';
import { MessageList } from '../../components/MessageList/MessageList';
import React, { useEffect, useState } from 'react';
import { ChatList } from '../../components/ChatList/ChatList'
import { useParams } from "react-router-dom";
import {
  Redirect
} from "react-router-dom";

const chatitems = [
  { name: 'Вероника', id: 'chat_1' },
  { name: 'Игорь', id: 'chat_2' },
  { name: 'Мария', id: 'chat_3' },
  { name: 'Ирина', id: 'chat_4' },
];

export const Chats = function (props) {

  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages([...messages, message])
  }

  useEffect(() => {
    const lastMessage = messages[messages.length - 1]
    if (lastMessage && lastMessage.author !== "Bot") {
      const botMessage = {
        author: "Bot",
        text: "Cообщение принято!"
      }
      setMessages([...messages, botMessage])
    }
  }, [messages]);

  const { chatId } = useParams();
  const [chats, setChats] = useState(chatitems);

  if (chatId && !chats.some(c => c.id === chatId))
    return <Redirect to="/nochat" />

  return (
    <div className="App-container">
      <ChatList chatitems={chats}
        chatId={chatId}
      ></ChatList>
      <div>
        <MessageList messages={messages}> </MessageList>
        <ChatForm onSubmit={addMessage}></ChatForm>
      </div>
    </div>
  )
};