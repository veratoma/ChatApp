import React from 'react';
import { ChatList } from '../ChatList/ChatList';

const chatitems = [
    { name: 'Вероника', id: 'chat_1' },
    { name: 'Игорь', id: 'chat_2' },
    { name: 'Мария', id: 'chat_3' },
    { name: 'Ирина', id: 'chat_4' },
];

export const NoChat = (props) => {

    return (
        <div>
            <ChatList chatitems={chatitems}></ChatList>
            <span>Please select a chat</span>
        </div>
    );
};
