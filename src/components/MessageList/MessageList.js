
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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


export function MessageList(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <ul className={classes.title} >
                    {props.messages.map((message, i) =>
                        <li key={i}>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>  {message.author} : {message.text}</Typography>
                        </li>)}
                </ul>
            </CardContent>
        </Card>
    );
}