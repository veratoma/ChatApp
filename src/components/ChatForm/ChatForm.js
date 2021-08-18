import './ChatForm.css';
import React, { useState } from 'react';

export function ChatForm(props) {

  const emptyMessage = {
    author: "",
    text: ""
  };

  const [message, setMessage] = useState(emptyMessage);

  const handleChangeAuthor = (event) => {
    setMessage({ ...message, author: event.target.value });
  }

  const handleChangeText = (event) => {
    setMessage({ ...message, text: event.target.value });
  }

  const sendMessage = () => {
    props.onSubmit(message)
    setMessage(emptyMessage)
  }

  return (
    <div>
      <input className="chatform" type="text" placeholder="Имя" value={message.author} onChange={handleChangeAuthor} /><br />
      <input className="chatform" type="text" placeholder="Сообщение" value={message.text} onChange={handleChangeText} /><br />
      <button className="chatform-button" onClick={sendMessage}> Отправить</button>
    </div>
  )
}

