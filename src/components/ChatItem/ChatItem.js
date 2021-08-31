import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    selected: {
        color:'black',
    }
}));

export const ChatItem = (props) => {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ListItemAvatar>
                <Avatar>
                </Avatar>
            </ListItemAvatar>
            <ListItemText className={props.isSelected ? classes.selected :null }>
                {props.chat.name}
            </ListItemText>
        </div>
    );
}