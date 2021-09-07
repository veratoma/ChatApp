import React from 'react';
import { ChatList } from '../ChatList/ChatList';

export const NoChat = (props) => {

    return (
        <div>
            <ChatList></ChatList>
            <span>Please select a chat</span>
        </div>
    );
};
