import React from 'react';
import { ChatItem } from '../ChatItem/ChatItem'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

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

export const ChatList = (props) => {

    const classes = useStyles();

    console.log(props.chatId)
    return (
        
        <List className={classes.root}>
            {props.chatitems.map((chat) =>
                <ListItem key={chat.id}>
                    <ChatItem isSelected={props.chatId===chat.id} chat={chat}></ChatItem>
                </ListItem>
            )}
        </List>
    );
};