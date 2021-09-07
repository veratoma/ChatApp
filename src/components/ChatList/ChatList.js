import React from 'react';
import { ChatItem } from '../ChatItem/ChatItem'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Dialog } from '@material-ui/core';
import { DialogTitle } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useState } from 'react';
import { chatsConnect } from '../../connects/chats';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        height: 484,
        backgroundColor: theme.palette.background.paper,
        border: 'solid #282c34',
        borderWidth: 3,
    },
}));

export const ChatListRender = (props) => {

    const classes = useStyles();
    const [visible, setVisible] = useState(false);
    const [newChatName, setNewChatName] = useState("");

    const handleOpen = () => setVisible(true);
    const handleClose = () => setVisible(false);
    const handleChange = (e) => setNewChatName(e.target.value);
    const onAddChat = () => {
        props.addChat({
            id: Date.now().toString(),
            name: newChatName
        })
        setNewChatName("");
        handleClose();
    };

    return (
        <div>
            <List className={classes.root}>
                {props.chats.map((chat) =>
                    <ListItem key={chat.id}>
                        <ChatItem isSelected={props.chatId === chat.id} chat={chat}></ChatItem>
                    </ListItem>
                )}
            </List>

            <span className="add-chat" onClick={handleOpen}>
                Добавить новый чат
            </span>

            <Dialog open={visible} onClose={handleClose}>
                <DialogTitle>Пожалуйста добавьте чат</DialogTitle>
                <TextField value={newChatName} onChange={handleChange} />
                <Button onClick={onAddChat} disabled={!newChatName}>
                    Добавить
                </Button>
            </Dialog>
        </div>
    );
};

export const ChatList = chatsConnect(ChatListRender);