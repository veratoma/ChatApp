
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardContent, Typography } from '@material-ui/core';
import { collectionsConnect } from '../../connects/collections/index'
import { useParams } from 'react-router';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        height: 500,
        border: 'solid #282c34',
        borderWidth: 3,
    },

    title: {
        fontSize: 14,
        listStyle: 'none',
        margin: 0,
        padding: 0,
    },
});

export function MessageListRender(props) {
    const classes = useStyles();
    const { chatId } = useParams();

    return (
        <Card className={classes.root}>
            <CardContent>
                <ul className={classes.title} >
                    {props.messages
                        .filter(msg => msg.chatId === chatId)
                        .map((message, i) =>
                            <li key={i}>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    {message.author} : {message.text}
                                </Typography>
                            </li>)}
                </ul>
            </CardContent>
        </Card>
    );
}
export const MessageList = collectionsConnect(MessageListRender);