import './App.css';
import { ChatForm } from './components/ChatForm/ChatForm';
import { MessageList } from './components/MessageList/MessageList';
import React, { useEffect, useState } from 'react';
import { ChatList } from './components/ChatList/ChatList'

const chatitems = [
  { name: 'Вероника', id: 'chat_1' },
  { name: 'Игорь', id: 'chat_2' },
  { name: 'Мария', id: 'chat_3' },
  { name: 'Ирина', id: 'chat_4' },
];


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
        <div className="App-container">
          <ChatList chatitems={chatitems}></ChatList>
          <div>
            <MessageList messages={messages}> </MessageList>
            <ChatForm onSubmit={addMessage}></ChatForm>
          </div>
        </div>
      </header>
    </div>
  );
}

