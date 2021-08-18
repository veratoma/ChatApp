import './MessageList.css';
import React from 'react';


export function MessageList(props) {

    return (
        <ul className="messagelist">
            {props.messages.map((message, i) => <li key={i}>{message.author} : {message.text}</li>)}
        </ul>
    )
}