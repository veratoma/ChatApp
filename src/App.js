import './App.css';
import { ChatForm } from './components/ChatForm/ChatForm';
import { MessageList } from './components/MessageList/MessageList';
import React, { useEffect, useState } from 'react';

export const App = function (props) {

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

  return (
    <div className="App">

      <header className="App-header">
        My First React App
        <ChatForm onSubmit={addMessage}></ChatForm>
        <MessageList messages={messages}> </MessageList>

      </header>

    </div>
  );
}

