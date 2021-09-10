import React from 'react';
import { ChatItem } from '../ChatItem/ChatItem'
import { DialogTitle,TextField, Button,Dialog,List,ListItem,makeStyles } from '@material-ui/core';
import { useState } from 'react';
import { chatsConnect } from '../../connects/chats';
import { useParams } from 'react-router';


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
    const { chatId } = useParams();
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
                        <ChatItem isSelected={chatId === chat.id} chat={chat}></ChatItem>
                    </ListItem>
                )}
            </List>

            <button className="add-chat" onClick={handleOpen}>
                Добавить новый чат
            </button>

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